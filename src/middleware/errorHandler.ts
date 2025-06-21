// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

// Define a custom error type for better clarity (optional)
interface CustomError extends Error {
  statusCode?: number;
  data?: any;
}

// Global error handling middleware
const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  console.error('API Error:', err.message);
  console.error(err.stack); // Log the stack trace for debugging

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong on the server.';

  res.status(statusCode).json({
    message: message,
    data: err.data // Include additional error data if available
  });
};

export default errorHandler;