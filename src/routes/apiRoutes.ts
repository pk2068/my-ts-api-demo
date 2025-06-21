// src/routes/apiRoutes.ts
import { Router } from 'express';
//import { getHealth, getWeather, createJob } from '../controllers/appController.js';
import { getHealth, getWeather, createJob } from '../controllers/appController.js';

const router = Router();

// Health check endpoint
router.get('/health', getHealth);

// Weather data endpoint
router.get('/weather', getWeather);

// Job creation endpoint
router.post('/job', createJob);

export default router;