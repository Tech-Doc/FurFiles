const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');
const connectDB = require('./config/database');
const redisClient = require('./config/redis');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);

module.exports = app;
