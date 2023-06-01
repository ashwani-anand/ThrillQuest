import  express  from "express";

import {verifyUser,verifyAdmin} from '../utils/verifyToken.js'
import {createbooking} from '../controllers/bookingController.js'
import {getBooking} from '../controllers/bookingController.js'
import {getAllBooking} from '../controllers/bookingController.js'


const router =express.Router()

router.post('/',createbooking )
router.get('/:id',getBooking )
router.get('/',getAllBooking )

export default router