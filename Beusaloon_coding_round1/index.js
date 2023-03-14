const express = require('express');
const app = express();
require("dotenv").config()

const Inventry = require('./iSchem ');


app.use(express.json());


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`))