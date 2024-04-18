import { Router } from 'express';
import chatCtrl from '../controllers/chatCtrl'

const router = Router()

// Grab collection of chatrooms
router.get('/rooms', chatCtrl.chatRooms)

// Add new room to Rooms collection
router.post('/addRoom', chatCtrl.addRoom)

// Grab users specific to chat room
router.post('/lobby', chatCtrl.lobby)

// Add new msg to room
router.post('/addMsg', chatCtrl.addMsg)


// // Add new user to User collection
// router.post('/register', chatCtrl.register)

// // Grab user profile based on IP address
// router.get('/profile/:address', chatCtrl.profile)

// // Grab collection of users
// router.get('/users', chatCtrl.users)

// // PARAMS
// router.param('address', (req, res, next, address)=>{
//   req.address = address;
//   next();
// })

export default router;