import config from './config/config.js';
import app from './server/express.js';
import express from 'express';
import mongoose from 'mongoose';
import contactRoutes from './server/routes/contact.routes.js';
import authRoutes from './server/routes/auth.routes.js';
import userRoutes from './server/routes/user.routes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri)
  .then(() => {
    console.log("✅ Connected to the database!");
  });

mongoose.connection.on('error', () => {
  throw new Error(`❌ Unable to connect to database: ${config.mongoUri}`);
});

// CORS for dev environment (adjust if needed in production)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// API Routes
app.use('/', contactRoutes);
app.use('/', authRoutes);
app.use('/', userRoutes);

// Serve static frontend files from client/dist
const frontendPath = path.join(__dirname, 'client/dist');
app.use(express.static(frontendPath));

// React Router fallback: always serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start server
app.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  }
  console.info('🚀 Server started on port %s.', config.port);
});
