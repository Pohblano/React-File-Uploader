import { Router } from 'express';
import userCtrl from '../controllers/userCtrl';

const router = Router()

router.post('/users', userCtrl.register) // Add new user to User collection
      .get('/users', userCtrl.users) // Grab collection of users
      
// Grab client profile based on IP address
router.get('/users/client/:userIP', userCtrl.address)

// Grab user profile based on ID
router.get('/users/:userID', userCtrl.profile)


// PARAMS
router.param('userIP', userCtrl.userIP)
      .param('userID', userCtrl.userID)


export default router;