const app= require('./app')
const {config}= require('dotenv')
const mongoose= require('mongoose')

config({path: './config.env'})

mongoose.connect(process.env.DATA_BASE).then(suc=>{
    // console.log(suc)
    console.log("Data base connection succesfull")
}).catch(err=>{
    console.log("Error while connecting Data base")
    console.log(err)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})