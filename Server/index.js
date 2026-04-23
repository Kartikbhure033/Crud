const express=require('express');
const mongoose=require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const CrudRoute=require("./Routes/Crud");
app.use('/api', CrudRoute);

const app=express();
const port=8000;

mongoose.connect('mongodb://localhost:27017/myapp')
.then(()=>console.log('MongoDB connected'))

app.listen(port,()=>console.log(`Server is running on port ${port}`));