const UserModel = require("../models/user-model")
const bcrypt = require("bcrypt")
const tokenService = require("./token-service")
const UserDto = require("../dtos/user-dto")
const ApiError = require("../exceptions/api-error")
const userModel = require("../models/user-model")

class UserService {
    async registration(email, password){
        const candidate = await UserModel.findOne({email})
        if(candidate){
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }

        const hashPassword = await bcrypt.hash(password, 3)
        const user = await UserModel.create({email, password: hashPassword})
        
        const userDto = new UserDto(user);  // id, email, isActivated
        const tokens = tokenService.generateTokens({...userDto}) // generate tokens
        
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return{ ...tokens, user: userDto}
    }

    async login(email, password){
        const user = await userModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest("Пользователь не был найден")
        }

        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals){
            throw ApiError.BadRequest("Неверный пароль")
        }

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return{ ...tokens, user: userDto}

    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken){
        if(!refreshToken){
            throw new ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = await tokenService.findToken(refreshToken)

        if(!userData || !tokenFromDB){
            throw new ApiError.UnauthorizedError();
        }
        const user = await userModel.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return{ ...tokens, user: userDto}
    }

}

module.exports = new UserService();