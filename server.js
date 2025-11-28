require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const locationRoutes = require('./routes/locations');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration untuk production
const corsOptions = {
    origin: process.env.FRONTEND_URL || '*',
    credentials: true,
    optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
let cachedDb = null;
const connectDB = async () => {
    if (cachedDb) {
        return cachedDb;
    }
    
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });
        cachedDb = conn;
        console.log('Connected to MongoDB');
        return conn;
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
    }
};

// Root endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Leaflet Backend API', status: 'running' });
});

// Routes
app.use('/api/locations', locationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Connect to DB dan start server (untuk local development)
if (process.env.NODE_ENV !== 'production') {
    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    });
}

// Export untuk Vercel serverless
module.exports = app;
module.exports.connectDB = connectDB;