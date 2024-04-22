import { NextFunction, Request, Response } from "express";
import { checkValidation } from "../helpers/validationHelpers";
import userRepository from "../repository/userRepository";
import { DefaultResponse } from "../helpers/defaultResponse";
import { comparePassword, hashPassword } from "../helpers/passwordHelper";
import { CustomError } from "../models/customError";
import { generateAccessToken } from "../helpers/tokenHelper";

class UserController {

    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            checkValidation(req);

            const userData = req.body

            const encryptPass = await hashPassword(req.body.password)

            userData.password = encryptPass;

            const userExists = await userRepository.getUserRepo(req.body?.email)

            if (userExists) {
                throw new CustomError(400, "User already exist")
            }

            const response = await userRepository.createUserRepo(userData)

            DefaultResponse(res, 200, 'User created successfully', response)

        } catch (error) {
            next(res.json(error));
        }
    }

    async loginUser(req: Request, res: Response, next: NextFunction) {
        try {
            checkValidation(req)
            const { email, password } = req.body

            const userExists = await userRepository.getUserRepo(email)

            if (!userExists) {
                throw new CustomError(404, "User not exist")
            }

            const isPasswordValid = await comparePassword(password, userExists?.password)

            if (!isPasswordValid) {
                throw new CustomError(401, "Invalid credentials")
            }


            const accessToken = generateAccessToken(userExists)

            const { name, id } = userExists

            DefaultResponse(res, 200, 'User loggedIn successfully', { userId: id, name: name, email: userExists?.email, accessToken })
        } catch (error) {
            next(res.json(error))
        }
    }

    async getUserData(req: Request, res: Response, next: NextFunction) {
        try {

            const userId = '6624be855315843d9b7a020e'
            const response = await userRepository.getUserData(userId)
            DefaultResponse(res, 200, 'UserData getSuccessFully', response)
        } catch (error) {
            next(res.json(error))
        }
    }
}

export default new UserController();