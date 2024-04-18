import { Router } from 'express';
import fileCtrl from '../controllers/fileCtrl'

const router = Router();

// Upload and save files
router.post('/upload', fileCtrl.upload)

// Read list of files
router.get('/directory', fileCtrl.directory)

// Download link routes
router.get('/Uploads/:name', fileCtrl.download)

// Read file data
router.get('/preview/Uploads/:name', fileCtrl.preview)

// PARAMS
router.param('name', (req, res, next, fileName)=>{
  req.fileName = fileName;
  next();
})



export default router;


