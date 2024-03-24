const userService = require("../service/user-service")
const UserService = require("../service/user-service")

class UserController{
    
    async registration(req, res, next){
        try {
            const {email, password} = req.body
            const userData =  await UserService.registration(email, password) 
            res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next){
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password)
            res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)

        }
    }

    async logout(req, res, next){
        try {
            
        } catch (e) {
            next(e)

        }
    }


    async refresh(req, res, next){
        try {
            
        } catch (e) {
            next(e)
 
        }
    }


}

module.exports = new UserController();