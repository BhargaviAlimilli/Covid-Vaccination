const userController= require('../Controllers/userController')
const express= require('express')

const router= express.Router()

router.route("/register").post(userController.register)

module.exports= router