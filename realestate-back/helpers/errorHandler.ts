import { NextFunction, Request, Response } from "express";
import { CustomError } from "../models/customError";

// export const customError = (err: CustomError, req: Request, res: Response) => {
//     console.log("object");
//     const error = new CustomError(err.status, err.message, err.additionalInfo);
//     return res.status(error.status).json({
//         status: error.status,
//         message: error.status === 500 ? 'Something went wrong' : error.message,
//         error: err.message
//     })
// }
export const customError = (err: any, req: Request, res: Response) => {
   

    // Ensure you're sending a meaningful response to the client
    res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || "Internal Server Error",
        additionalInfo: err.additionalInfo || {}
    });
}



// export const notFound = (req: Request, res: Response, next: NextFunction) => {

//     const error = new CustomError(404, "Path not found")
//     next(error)
// }