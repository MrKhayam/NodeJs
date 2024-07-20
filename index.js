const express  = require('express');

require('dotenv').config();

const app = express();


app.use('/api/product', require('./routes/product-route'));


app.listen(process.env.PORT,()=> console.log(`Server started at port : ${process.env.PORT}`));