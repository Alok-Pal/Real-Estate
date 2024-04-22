import { NextFunction, Request, Response } from "express";
import ListingRepository from "../repository/ListingRepository";
import { DefaultResponse } from "../helpers/defaultResponse";
import { CustomError } from "../models/customError";
import { body } from 'express-validator';

class ListingController {

    async createListing(req: any, res: Response, next: NextFunction) {
        try {

            const listingData = JSON.parse(req.body.values)
            if (req?.file) {
                const fileNameMulter = (req?.file.filename);
                listingData.image = fileNameMulter
            }
            // validateListingData(listingData)

            listingData.price = Number(listingData.price)

            const userId = req?.listing?.userId
            if (!userId) {
                const error = new CustomError(
                    401,
                    "Authentication Error: please login again"
                );
                return next(res.json(error));
            }

            const response = await ListingRepository.createListingRepo(listingData, userId)


            DefaultResponse(res, 200, 'Listing done successfully', response)

        } catch (error) {
            next(res.send(error));
        }
    }

    async deleteListing(req: any, res: Response, next: NextFunction) {
        try {
            const deleteData = req.body
            const {id , userId} = deleteData
            const tokenUserId = req?.listing?.userId

            if (userId !== tokenUserId) {
                const error = new CustomError(
                    401,
                    "You are not allowed to delete other listing"
                );
                return next(res.json(error));
            }

            const response = await ListingRepository.deleteListingRepo(id)
            DefaultResponse(res,200,'Listing is deleted successfully',response)
        } catch (error) {
            next(res.send(error));
        }
    }

    async updateListing(req: any, res: Response, next: NextFunction) {
        try {

            const listingData = JSON.parse(req.body.values)

            if (req?.file) {
                const fileNameMulter = (req?.file.filename);
                listingData.image = fileNameMulter
            }

            listingData.price = Number(listingData.price)

            const UserIdFront =  listingData?.userId
            const userIdBack = req?.listing?.userId
            if (UserIdFront !== userIdBack) {
                const error = new CustomError(
                    401,
                    "You are not allowed to edit other's listing"
                );
                return next(res.json(error));
            }

            const response = await ListingRepository.updateListingRepo(listingData, userIdBack)


            DefaultResponse(res, 200, 'Listing update successfully', response)

        } catch (error) {
            next(res.send(error));
        }
    }

}

export default new ListingController();