const express = require('express');
const dotenv = require('dotenv');

// Route Files
const routen = require('./routen/routen.js')

// Load env vars
dotenv.config({path:'./config/config.env'})

const app = express();
const PORT = process.env.PORT;
const MODE = process.env.NODE_ENV

// Routen:

app.use('/force', routen)

app.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`));