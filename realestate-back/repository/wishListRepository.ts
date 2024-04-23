import { IListingData, IUpdateListingData } from "../helpers/ListingErrorHandler";
import { prisma } from "../prisma";
import { ObjectId } from 'mongodb';



class WishlistRepository {

    async createWishlistRepo(wishlistData: any, userId: string) {
        try {
            const res = await prisma.wishlist.create({
                data: {
                    title: wishlistData.title,
                    listingType: wishlistData.listingType,
                    description: wishlistData.description,
                    price: wishlistData.price,
                    phoneNumber: wishlistData.phoneNumber,
                    address: wishlistData.address,
                    amenities: wishlistData.amenities,
                    image: wishlistData.image,
                    location: wishlistData.location,
                    wishlistUserId: userId,
                    listId: wishlistData.id
                }
            })
            return res
        } catch (error) {
            console.log("🚀 ~ WishlistRepository ~ createWishlistRepo ~ error:", error)
        }
    }

    async getWishlistRepo(userId: string) {
        try {
            const res = await prisma.wishlist.findMany({
                where: {
                    wishlistUserId: userId
                }
            })
            return res
        } catch (error) {
            console.log("🚀 ~ WishlistRepository ~ getWishlistRepo ~ error:", error)
        }
    }

    async getWishlistRepoByListId(listId: string) {
        try {
            const res = await prisma.wishlist.findFirst({
                where: {
                    listId: listId
                }
            })
            return res
        } catch (error) {
            console.log("🚀 ~ WishlistRepository ~ getWishlistRepoByListId ~ error:", error)
        }
    }

    async deleteWishlistRepo(id: string) {
        const res = await prisma.wishlist.delete({
            where: {
                id: id
            }
        })
        return res
    }




}


export default new WishlistRepository