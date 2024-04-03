import express from 'express'
import MovieController from '../controllers/MovieController';
const router=express.Router();
router.get('/allmovies',MovieController.getallMovies)
router.get('/getmovie/:id',MovieController.getMovie)
router.post('/addmovie',MovieController.addMovies)
router.put('/update/:id',MovieController.updateMovies)
router.delete('/delete/:id',MovieController.deleteMovie)
export default router