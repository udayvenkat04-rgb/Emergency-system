import express from 'express';
import { triggerEmergency, getEmergencies } from '../controllers/emergencyController.js';

const router = express.Router();

router.post('/trigger', triggerEmergency);
router.get('/', getEmergencies);

export default router;
