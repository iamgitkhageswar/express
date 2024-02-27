const express =require("express")
const dotenv=require("dotenv").config()
const app =express()
const errorHandler=require("./middleware/errorHandler")
const connectionDb = require("./config/dbconnection")
const port=process.env.PORT || 5000


connectionDb()
app.use(express.json())
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use(errorHandler)
app.listen(port,(req,res)=>{
    console.log(`server is running at htttps://localhost${port}`)
})