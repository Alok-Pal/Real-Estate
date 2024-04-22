import { IListingData, IUpdateListingData } from "../helpers/ListingErrorHandler";
import { prisma } from "../prisma";
import { ObjectId } from 'mongodb';



class ListingRepository {

    async createListingRepo(listingData: IListingData, userId: string) {
        const res = await prisma.listing.create({
            data: {
                title: listingData.title,
                listingType: listingData.listingType,
                description: listingData.description,
                price: listingData.price,
                phoneNumber: listingData.phoneNumber,
                address: listingData.address,
                amenities: listingData.amenities,
                image: listingData.image,
                location: listingData.location,
                User: {
                    connect: {
                        id: userId
                    }
                }
            }
        })
        return res
    }

    async deleteListingRepo(listingId: string) {
        const res = await prisma.listing.delete({
            where: {
                id: listingId
            }
        })
        return res
    }

    async updateListingRepo(listingData: IUpdateListingData, userId: string) {
        const res = await prisma.listing.update({
            where: {
                id: listingData.listId
            }, data: {
                title: listingData.title,
                listingType: listingData.listingType,
                description: listingData.description,
                price: listingData.price,
                phoneNumber: listingData.phoneNumber,
                address: listingData.address,
                amenities: listingData.amenities,
                image: listingData.image,
                location: listingData.location,
                User: {
                    connect: {
                        id: listingData.userId
                    }
                }
            }
        })
        return res
    }
}

export default new ListingRepository