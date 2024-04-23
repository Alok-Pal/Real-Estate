import express from 'express'
import { isAuthenticated } from '../helpers/authMiddleware';
import wishListController from '../controller/wishListController';
const wishlistRouter = express()

wishlistRouter.post('/create',isAuthenticated ,wishListController.createListing )

wishlistRouter.get('/get',isAuthenticated ,wishListController.getWishlistData )

// wishlistRouter.delete('/delete' ,isAuthenticated,wishListController.deleteWishlist )

wishlistRouter.delete('/delete/:id', isAuthenticated, wishListController.deleteWishlist);






export default wishlistRouter;