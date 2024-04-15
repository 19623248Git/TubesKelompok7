require('dotenv').config();

const express = require('express')
const fs = require('fs')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const connectDB = require('./routes/config/db')

const PORT = 8888 || process.env.PORT;

// connect to MongoDB
connectDB();

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layouts/full-layout')

app.use(express.static(__dirname + '/public'))

app.use('/', require('./routes/main'))

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})
