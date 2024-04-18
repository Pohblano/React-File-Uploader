import { Router } from 'express';
import authCtrl from '../controllers/authCtrl'

const router = Router()
// Verify user
router.post('/auth/signin', authCtrl.signin);

// Clear user
router.get('/auth/signout', authCtrl.signout)

export default router;