const app = require('../server');
const { connectDB } = require('../server');

module.exports = async (req, res) => {
    // Connect to database setiap request (serverless)
    await connectDB();
    
    // Handle request dengan Express app
    return app(req, res);
};
