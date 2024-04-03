import mongoose from "mongoose";
const movieSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    director:{
        type:String,
        require:true,
        
    },
    dor:{
        type:String,
        require:true,
        
    },
    rating:{
        type:String,
        require:true,
        
    },
})
export const MovieModel=mongoose.model('moviedetails',movieSchema);