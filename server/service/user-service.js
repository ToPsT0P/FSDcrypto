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
            throw ApiError.BadReques    (`Пользователь с почтовым адресом ${email} уже существует`)
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
            throw ApiError.BadReques("Пользователь не был найден")
        }

        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals){
            throw ApiError.BadReques("Неверный пароль")
        }

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return{ ...tokens, user: userDto}

    }

}

module.exports = new UserService();