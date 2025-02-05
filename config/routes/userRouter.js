const express=require('express')
const { registerController,requireSignIn, loginController,updateUserController } = require('../controller/userController')

//router object
 const router=express.Router()


 //routes
 //register post
 router.post('/register',registerController);

 //login post
 router.post('/login',loginController);

 //update || put
 router.put('/update-user', requireSignIn , updateUserController);
 //export
 module.exports=router