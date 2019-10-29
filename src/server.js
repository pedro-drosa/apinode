const express = require("express");
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://myusername:mypassword@cluster0-mzspv.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.listen('8080',()=>{
    console.log('this server is running');
});
