const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//now to accept from the body we should use the body parser

app.use(express.json());
app.use(express.urlencoded(extended=false));

//now adding the static file frontend linkup

app.use(express.static(path.join(__dirname,'public')));

app.use('/openai',require("./routes/openairoutes"));

app.listen(port,()=>console.log(`The Server is WOrking at ${port}`));