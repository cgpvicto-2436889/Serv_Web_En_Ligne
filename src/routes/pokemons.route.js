import express from 'express';
import { getPokemons } from '../controllers/pokemons.controller.js';


const pokemonsRouter = express.Router();

// IMPORTANT: ici, PAS de /api/salutations dans les paths,
// parce que index.js va déjà faire app.use('/api/salutations', router)

pokemonsRouter.get('/pokemons/', getPokemons);

export default pokemonsRouter;