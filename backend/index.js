const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Enable CORS for frontend-backend communication
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Email configuration using Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Using environment variable for email
    pass: process.env.EMAIL_PASS   // Using environment variable for password
  }
});

// Route for sending email
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL, // Recipient email from environment variable
    subject: `Message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);  // Log the error
      return res.status(500).send({ success: false, message: 'Error sending message' });
    }
    res.send({ success: true, message: 'Message sent successfully!' });
  });
  
});

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello from Node.js backend with MongoDB and Nodemailer!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
