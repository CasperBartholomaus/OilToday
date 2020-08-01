const userRouter = require("express").Router();
const loginController = require("./../controllers/user/authenticate");
const userSettingsController = require("./../controllers/user/settings");

userRouter.post("/user/login", loginController.userLogin);
userRouter.post("/user/settings", userSettingsController.userSettings);

module.exports = userRouter;