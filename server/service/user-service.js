const UserModel = require("../models/user-model")
const bcrypt = require("bcrypt")
const uuid = require("uuid")
const MailService = require("./mail-service")
const tokenService = require("./token-service")
const UserDto = require("../dtos/user-dto")

class UserService {
    async registration(email, password){
        const candidate = await UserModel.findOne({email})
        if(candidate){
            throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
        }

        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()  // link like vva1-asdg-sasd-csss
        const user = await UserModel.create({email, password: hashPassword, activationLink})
        
        const userDto = new UserDto(user);  // id, email, isActivated
        const tokens = tokenService.generateTokens({...userDto}) // generate tokens
        
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        await MailService.sendActivationMail(email, activationLink)

        return{ ...tokens, user: userDto}
    }

}

module.exports = new UserService();