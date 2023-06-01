import express from 'express'
import {deleteUser, getSingleUser,getAllUser,updateUser} from '../controllers/userController.js'
const router=express.Router()

import { verifyUser,verifyAdmin} from '../utils/verifyToken.js'


//update new User
router.post('/:id',verifyUser,updateUser)

//delete user
router.delete('/:id',verifyUser,deleteUser)

//get single user
router.get('/:id',verifyUser,getSingleUser)

//get all User
router.get('/',verifyAdmin,getAllUser)


export default router;
