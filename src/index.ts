// src/index.ts
import app from './server.js'; // Using path alias (or './server' if @src isn't preferred)
import config from './config/env.js'; // Using path alias

console.log('Starting server...');

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Server running in ${config.NODE_ENV} mode on port ${PORT}`);
  console.log(`Access health check at http://localhost:${PORT}/api/v1/health`);
  console.log(`Access weather at http://localhost:${PORT}/api/v1/weather`);
  console.log(`Post to job endpoint at http://localhost:${PORT}/api/v1/job`);
});