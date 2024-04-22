import express from 'express'
import multer from 'multer'
import path from 'path'
import ListingController from '../controller/ListingController'
import { isAuthenticated } from '../helpers/authMiddleware'
const listingRouter = express()




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/Images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })

listingRouter.post('/upload',isAuthenticated, upload.single('file'),ListingController.createListing )

listingRouter.put('/upload/update',isAuthenticated, upload.single('file'),ListingController.updateListing )

listingRouter.delete('/delete',isAuthenticated, ListingController.deleteListing)





export default listingRouter;