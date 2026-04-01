import pokemonModel from "../models/pokemons.model.js";

const getPokemons = async (req, res) => {
  const id = req.params.id;

  try {
    const pokemon = await pokemonModel.getPokemonSelonId();

    if (pokemon.length === 0) {
      return res.status(404).json({ error: `Aucun pokemons` });
    }

    return res.status(200).json(pokemon[0]);
  } catch (erreur) {
    console.log(`Erreur PostgreSQL: ${erreur.message}`);
    return res.status(500).json({
      error: "Erreur interne du serveur   " + erreur
    });
  }
};

export {
  getPokemons
};