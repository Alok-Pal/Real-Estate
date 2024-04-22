import { NextFunction, Response } from "express";
import { verifyAccessToken } from "../helpers/tokenHelper";
import { CustomError } from "../models/customError";

export const isAuthenticated = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    // Fetch Token from Header
    const accessToken = req?.headers?.authorization?.split(" ")[1];
    // Check if the access token is missing
    if (!accessToken) {
      const error = new CustomError(
        401,
        "Authentication Error: Your session has expired. Please log in again to continue using the app."
      );
      return next(res.json(error));
    }

    // Verify the access token
    const verifiedAccessToken: any = verifyAccessToken(accessToken);
    // Check if the access token is invalid
    if (!verifiedAccessToken) {
      const error = new CustomError(
        401,
        "Authentication Error: Invalid access token,please login again"
      );
      return next(res.json(error));
    }

    // Attach user information to the request
    req.listing = {
      userId: verifiedAccessToken.id,
      email: verifiedAccessToken.email,
      name: verifiedAccessToken.name,
    };

    // User is authenticated
    next();
  } catch (err: any) {
    next(res.json(err));
  }
};
