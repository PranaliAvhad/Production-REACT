
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Rest object
const app = express();


// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
// app.get('', (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "Welcome to full stack app example1"
//     });
// });

app.use('/api/v1/auth', require('./config/routes/userRouter'));
app.use('/api/v1/post', require('./config/routes/postRoutes'));
// Port
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgRed.white); // use backticks for template literal
});
