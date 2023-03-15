const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5500;


const TodoItemRoute = require('./routes/todoItems');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect('mongodb+srv://kevinham0218:kevinham0218@mernapp.udym9mx.mongodb.net/?retryWrites=true&w=majority');
      console.log('db connected');
      //console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }


// mongoose.connect(process.env.DB_CONNECT)
// .then(()=>console.log('db connected'))
// .catch(err => console.log(err))

app.use('/',TodoItemRoute);
app.get('/',(req,res)=>{
    res.send('helloworld')
})

//app.listen(5500, ()=>{console.log('server is run ${PORT}')})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})
