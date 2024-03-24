const jwt = require("jsonwebtoken");
const tokenModel = require("../models/token-model")


class TokenService {
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "30m"})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "60d"})

        return{
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token){
        try {
            const userData = jwt.verify(token, procces.env.JWT_ACCESS_SECRET);
            return userData
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token){
        try {
            const userData = jwt.verify(token, procces.env.JWT_REFRESH_SECRET);
            return userData
            
        } catch (e) {
            return null
        }
    }

    async saveToken(userId, refreshToken){
        let tokenData = await tokenModel.findOne({user: userId});
        if(!tokenData){
            tokenData = await tokenModel.create({user: userId, refreshToken});
        } else {
            tokenData.refreshToken = refreshToken;
            await tokenData.save();
        }
        return tokenData;
    }

    async removeToken(refreshToken){
        const tokenData = await tokenModel.deleteOne({refreshToken})
        return tokenData
    }

    async findToken(refreshToken){
        const tokenData = await tokenModel.findOne({refreshToken})
        return tokenData
    }
}

module.exports = new TokenService();