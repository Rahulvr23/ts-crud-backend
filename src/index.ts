import express from 'express'
import mongoose from 'mongoose'
import router from './routes'
const app= express()
app.use(express.json())
const DATA_BASE="mongodb+srv://rahul:rahul@cluster0.jmwdkzm.mongodb.net/cart?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DATA_BASE)//mongodb connection establised
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
app.use("/",router)

//server started at port 4000 
const PORT=4000
app.listen(PORT,()=>{
    console.log(`server Listening on port ${PORT}`);
    
})