const express = require("express");
const authRoutes = express.Router();
const AuthController = require ('../controller/AuthController')

authRoutes.post("/signup", AuthController.signup);
authRoutes.post("/login", AuthController.login);
authRoutes.post("/join", AuthController.join);



module.exports = authRoutes;