import { body } from "express-validator";

export const userBodyRegisterRules = [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().notEmpty().withMessage("Email is required"),
    body("password").trim().notEmpty().withMessage("Password is required")
]

export const userBodyLogInRules = [
    body("email").trim().notEmpty().withMessage("Email is required").isEmail(),
    body("password").trim().notEmpty().withMessage("Password is required")
]