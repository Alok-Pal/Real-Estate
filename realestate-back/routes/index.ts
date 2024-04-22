import express from 'express';
import userRouter from './userRoutes';
import { customError } from '../helpers/errorHandler';
import listingRouter from './ListingRoutes';
const router = express();

router.use('/',listingRouter)
router.use('/user', userRouter);

// Register the error handling middleware after mounting routes
router.use(customError);

export default router;
