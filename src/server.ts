// src/server.ts
import express from 'express';
import apiRoutes from './routes/apiRoutes.js'; // Using path alias
import errorHandler from './middleware/errorHandler.js'; // Using path alias

const app = express();

// Middleware to parse JSON body requests
app.use(express.json());

// Main API routes
app.use('/api/v1', apiRoutes);

// Catch 404 Not Found errors
app.use((req, res, next) => {
  const error: any = new Error('Not Found');
  error.statusCode = 404;
  next(error);
});

// Global error handling middleware (must be last)
app.use(errorHandler);

export default app;