const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5500;


const TodoItemRoute = require('./routes/todoItems');

mongoose.connect(process.env.DB_CONNECT)
.then(()=>console.log('db connected'))
.catch(err => console.log(err))

app.use('/',TodoItemRoute);


app.listen(5500, ()=>{console.log('server is run ${PORT}')})