// src/config/env.ts
import dotenv from 'dotenv';

dotenv.config(); // Load .env file
console.log('Environment variables loaded:', process.env);

interface EnvConfig {
  PORT: number;
  NODE_ENV: string;
}

const config: EnvConfig = {
  PORT: parseInt(process.env.PORT || '3001', 10),
  NODE_ENV: process.env.NODE_ENV || 'development',
};

// Basic validation (optional but recommended)
if (isNaN(config.PORT)) {
  console.error('Environment variable PORT is not a valid number. Defaulting to 3001.');
  config.PORT = 3001;
}

export default config;