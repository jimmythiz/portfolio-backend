const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
require('dotenv').config();


// Import routes
const CommentRoute = require('./Routes/CommentRoute');
const ProjectRoute = require('./Routes/Projectsroute');
const cvroutes = require("./Routes/cvroutes");

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const { login, authenticateToken } = require('./Controller/AuthController');
app.post('/api/login', login);


// Route mounting
app.use('/api/comments', CommentRoute);
app.use('/api/projects', ProjectRoute);

app.use("/api", cvroutes);

// Root test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
