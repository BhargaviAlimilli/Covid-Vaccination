const express= require('express')
const userRoutes= require('./Routers/userRoute')

const app= express()


app.get('/', (req,res)=>{
    res.status(200).send(" Hello there") 
    console.log("you are on root")
})

app.use('/api', userRoutes)



module.exports= app