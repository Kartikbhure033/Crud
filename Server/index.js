const express=require('express');
const mongoose=require('mongoose')

const app=express();
const port=8000;;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const CrudRoute=require("./Routes/Crud");
app.use('/api', CrudRoute);

mongoose.connect('mongodb://localhost:27017/myapp')
.then(()=>console.log('MongoDB connected'))

app.listen(port,()=>console.log(`Server is running on port ${port}`));