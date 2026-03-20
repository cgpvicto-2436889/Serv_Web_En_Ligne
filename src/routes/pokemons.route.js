import express from 'express';
import { getPokemons, getSalutationsPourLangue} from '../controllers/pokemons.controller.js';


const pokemonsRouter = express.Router();

// IMPORTANT: ici, PAS de /api/salutations dans les paths,
// parce que index.js va déjà faire app.use('/api/salutations', router)

pokemonsRouter.get('/pokemons/:id', getPokemons);
pokemonsRouter.get('/salutation/', getSalutationsPourLangue)

export default pokemonsRouter;