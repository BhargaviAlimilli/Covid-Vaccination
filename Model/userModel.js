const mongoose= require("mongoose")

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Female", "Male"]
    },
    adhar:{
        type:Number,
        unique:true,
        required:true
    },
    date_of_vacination: {
        type: Date,
        default: Date.now()  
    },
    state: String

})

const User= mongoose.model('User', userSchema)

module.exports= User