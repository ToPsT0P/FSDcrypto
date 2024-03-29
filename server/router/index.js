const Router = require("express");
const UserController = require("../controllers/user-controller")

const router = new Router();


router.post("/registration", UserController.registration)   ;
router.post("/login", UserController.login)
router.post("/logout", UserController.logout)
router.get("/refreshToken", UserController.refresh)

module.exports = router
