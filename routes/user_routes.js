const express = require("express")

const {home, createUser ,deleteUser,editUser} = require("../controllers/user_controllers.js")



const router=express.Router();
router.get("/",home)
router.post('/createuser',createUser)
router.put('/edituser/:id',editUser)
router.delete('/deleteuser/:id',deleteUser)


module.exports =router

