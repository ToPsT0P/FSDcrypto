const Router = require("express");
const UserController = require("../controllers/user-controller")

const router = new Router();


router.post("/registration", UserController.registration)   ;
router.post("/login", UserController.login)
router.post("/logout", UserController.logout)
router.get("/activate/:link", UserController.activate)
router.get("/refreshToken", UserController.refresh)
router.get("/users", UserController.getUsers)

module.exports = router
