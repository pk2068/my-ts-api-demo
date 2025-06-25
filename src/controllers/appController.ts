/* eslint-disable @typescript-eslint/no-unused-vars */
// src/controllers/appController.ts
import { Request, Response, NextFunction } from 'express';

// GET /api/v1/health
export const getHealth = (_req: Request, res: Response, _next: NextFunction) => {
  // In a real app, you might check database connection, external services, etc.
  console.log('Health check requested.');
  res.status(200).json({ status: 'ok', message: 'API is healthy' });
};

// GET /api/v1/weather
export const getWeather = (_req: Request, res: Response, _next: NextFunction) => {
  console.log('Weather data requested.');
  // Simulate fetching weather data
  const weatherData = {
    location: 'Slovenia',
    temperature: {
      value: Math.floor(Math.random() * 15) + 10, // Random temp between 10 and 25
      unit: 'Celsius',
    },
    condition: 'Partly Cloudy',
    humidity: '65%',
    windSpeed: '10 km/h',
  };
  res.status(200).json(weatherData);
};

// POST /api/v1/job
interface JobRequestBody {
  title: string;
  description: string;
  status?: string;
}

export const createJob = (req: Request, res: Response, _next: NextFunction) => {
  console.log('Job creation requested.');
  const { title, description, status }: JobRequestBody = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required.' });
  }

  // In a real app, you would save this to a database
  const newJob = {
    id: `job-${Date.now()}-${Math.floor(Math.random() * 1000)}`, // Simple unique ID
    title,
    description,
    status: status || 'pending', // Default status if not provided
    createdAt: new Date().toISOString(),
  };

  console.log('New Job created:', newJob);
  return res.status(201).json({ message: 'Job created successfully', job: newJob });
};
