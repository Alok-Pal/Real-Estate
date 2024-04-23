import express from 'express'
import userController from '../controller'
import { userBodyLogInRules, userBodyRegisterRules } from '../helpers/validation'
import { isAuthenticated } from '../helpers/authMiddleware'
const userRouter = express()

userRouter.post('/create', userBodyRegisterRules, userController.userController.createUser)
userRouter.post('/login', userBodyLogInRules, userController.userController.loginUser)

userRouter.get('/userData', userController.userController.getUserData)






export default userRouter;