const {Schema, model} = require('mongoose');

const CrudSchema = new Schema({
   firstname:{
    type:String,
    required:true
   },
   lastname:{
    type:String,
    required:true
   },
    email:{
    type:String,
    required:true,
    },
    phone:{
    type:String,
    required:true
    },
    Address:{
    type:String,
    required:true
    },
    Date:{
    type:Date,
    required:true
    },
    gender:{
    type:String,
    required:true
    },
    Hobby:{
    type:String,
    required:true   
    },
    country:{
    type:String,
    required:true
    },
    States:{
    type:String,
    required:true
    },
    city:{
    type:String,
    required:true
    }   
});


module.exports = model('Crud', CrudSchema);