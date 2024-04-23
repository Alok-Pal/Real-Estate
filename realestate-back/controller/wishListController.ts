import { NextFunction, Request, Response } from "express";
import ListingRepository from "../repository/ListingRepository";
import { DefaultResponse } from "../helpers/defaultResponse";
import { CustomError } from "../models/customError";
import { body } from 'express-validator';
import wishListRepository from "../repository/wishListRepository";

class WishlistController {

    async createListing(req: any, res: Response, next: NextFunction) {
        try {
            const data = req.body;
            const userId = req?.listing?.userId;
            if (!userId) {
                const error = new CustomError(
                    401,
                    "Authentication Error: please login again"
                );
                return next(res.json(error));
            }

            const wishListAlreadyExists = await wishListRepository.getWishlistRepoByListId(data.id)
            if (wishListAlreadyExists) {
                const error = new CustomError(
                    401,
                    "This listing is already exists"
                );
                return next(res.json(error));
            }

            const response = await wishListRepository.createWishlistRepo(data, userId)

            DefaultResponse(res, 200, 'Listings added to wishlist', response);
        } catch (error) {
            next(res.send(error));
        }
    }


    async getWishlistData(req: any, res: Response, next: NextFunction) {
        try {

            const userId = req?.listing?.userId
            const response = await wishListRepository.getWishlistRepo(userId)
            DefaultResponse(res, 200, 'UserData getSuccessFully', response)
        } catch (error) {
            next(res.json(error))
        }
    }

    async deleteWishlist(req: any, res: Response, next: NextFunction) {
        try {
            const deleteDataId = req.params.id
            console.log("🚀 ~ WishlistController ~ deleteWishlist ~ deleteData:", deleteDataId)
            const response = await wishListRepository.deleteWishlistRepo(deleteDataId)
            DefaultResponse(res,200,'Listing is deleted from wishlist',response)
        } catch (error) {
            next(res.send(error));
        }
    }
}

export default new WishlistController();
