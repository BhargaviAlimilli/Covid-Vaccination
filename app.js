const express= require('express')

const app= express()


app.use('/', (req,res)=>{
    res.status(200).json({
        hey:"hello"
    }) 
    console.log("you are on root")
})

module.exports= app