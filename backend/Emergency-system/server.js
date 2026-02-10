import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import emergencyRoutes from './routes/emergency.js';
import locationRoutes from './routes/location.js';
import contactRoutes from './routes/contacts.js';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/emergency', emergencyRoutes);
app.use('/api/location', locationRoutes);
app.use('/api/contacts', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Socket.io events
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('emergency:trigger', (data) => {
    console.log('Emergency triggered:', data);
    io.emit('emergency:update', {
      userId: data.userId,
      timestamp: new Date(),
      location: data.location,
    });
  });

  socket.on('location:update', (data) => {
    io.emit('location:update', {
      userId: data.userId,
      latitude: data.latitude,
      longitude: data.longitude,
      timestamp: new Date(),
    });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    httpServer.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
};

startServer();
