import express from 'express';
import userRouter from './userRoutes';
import { customError } from '../helpers/errorHandler';
import listingRouter from './ListingRoutes';
import wishlistRouter from './wishlistRoutes';
const router = express();

router.use('/',listingRouter)
router.use('/user', userRouter);
router.use('/wishlist', wishlistRouter);

// Register the error handling middleware after mounting routes
router.use(customError);

export default router;
