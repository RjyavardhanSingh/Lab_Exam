const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/route');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://rajyavardhansing2003:%40Rajesh12@cluster0.d8tq2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', ).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('MongoDB connection error:', err));
   // Routes
   app.use('/api/myUser', userRoutes);
   const PORT = 5000;
   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));