const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")
const khariSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim: true,
        unique: true
    },
    role:{
        type:String,
        trim:true
    },
    branch:{
        type:String,
        trim:true
    }
    
});
khariSchema.plugin(passportLocalMongoose,{
  nameField:"email", 
});
module.exports=mongoose.model("Khari", khariSchema);