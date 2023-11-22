import express from 'express';
import multer from 'multer';
import { addPlantATreeForm } from '../controllers/user-controller.js';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.post('/plant-a-tree',upload.single('imageUrl'),addPlantATreeForm);

export default router;