const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require("dotenv").config()
const cors = require('cors')
const port = process.env.PORT || 5000;
const connectDB = require('./repositories/emergexDB')
connectDB();


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


const homePage = require('./routes/homepage')
app.use('/web/', homePage);





app.listen(port, () => {
    console.log(`server listening at port ${port}`);
});