/* eslint-disable @typescript-eslint/no-unused-vars */
// src/middleware/errorHandler.ts
import MyCustomError from '@src/types/errors.js';
import { Request, Response, NextFunction } from 'express';

// Define a custom error type for better clarity (optional)
interface CustomError extends Error {
  statusCode?: number;
  data?: string | string[] | object; // Additional data to include in the error response
  stack?: string | undefined; // Optional stack trace for debugging
}

// Global error handling middleware
const errorHandler = (err: MyCustomError, req: Request, res: Response, _next: NextFunction) => {
  console.error('API Error:', err.message);
  console.error(err.stack); // Log the stack trace for debugging

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong on the server.';

  res.status(statusCode).json({
    message: message,
    data: err.data, // Include additional error data if available
  });
};

export default errorHandler;
