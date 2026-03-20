import express from 'express';
import pokemonsRouter from './src/routes/pokemons.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json('Bienvenue à toi vieux padawan');
});

app.use('/api/', pokemonsRouter);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});