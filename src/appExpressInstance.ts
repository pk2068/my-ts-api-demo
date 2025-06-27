// src/server.ts
import express from 'express';
import apiRoutes from './routes/apiRoutes.js'; // Using path alias
import errorHandler from './middleware/errorHandler.js'; // Using path alias
import MyCustomError from './types/errors.js';

const app = express();

// Middleware to parse JSON body requests
app.use(express.json());

// Main API routes
console.log('Setting up API routes...');
app.use('/api/v1', apiRoutes);

// Catch 404 Not Found errors
app.use((req, res, next) => {
  const myErr = new MyCustomError('Not Found', 404, 'The requested resource was not found in server.ts');
  next(myErr);
});

// Global error handling middleware (must be last)
app.use(errorHandler);

export default app;
