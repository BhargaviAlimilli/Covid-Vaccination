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
        unique:true
    },
    date_of_vacination: Date
})

const User= mongoose.model('User', userSchema)

module.exports= User