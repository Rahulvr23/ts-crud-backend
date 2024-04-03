import express from 'express'
  import {MovieModel} from '../db/movieSchema'
  class MovieController{
    getallMovies=async(request:express.Request,response:express.Response)=>{
try {
    const movies=await MovieModel.find()
    return response.status(200).json({data:movies})
} catch (error) {
    return response.status(400)
}
    }

    getMovie=async(request:express.Request,response:express.Response)=>{
        try {
            const {id}=request.params
            const movie=await MovieModel.findById(id)
            return response.status(200).json({data:movie})
        } catch (error) {
            return response.status(400)
        }
            }
        
            addMovies=async(request:express.Request,response:express.Response)=>{
                try {
                    const{name,director,dor,rating}=request.body
                    const movie=new MovieModel({
                        name,
                        director,
                        dor,
                        rating
                    })
              await movie.save()
                    return response.status(200).json({data:movie})
                } catch (error) {
                    return response.status(400)
                }
                    }
                
            
                    updateMovies=async(request:express.Request,response:express.Response)=>{
                        try {
                            const{id}=request.params
                            const{name,director,dor,rating}=request.body
                           
                    const movie= await MovieModel.findById(id)
                    if (movie) {

                        movie.name=name;
                        
                        movie.director=director;
                        movie.dor=dor;
                        movie.rating=rating;
                        await movie.save()
                        return response.status(200).json({data:movie})
                    }
                          
                        } catch (error) {
                            return response.status(400)
                        }
                            }
                              
                
                            deleteMovie=async(request:express.Request,response:express.Response)=>{
                                try {
                                    const {id}=request.params
                                    const movie=await MovieModel.findByIdAndDelete ({_id:id})
                                    return response.status(200).json({data:movie})
                                } catch (error) {
                                    return response.status(400)
                                }
                                    }            
        
        
        
        








  }
  export default new MovieController