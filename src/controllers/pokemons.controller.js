import pokemonModel from "../models/pokemons.model.js";

const getPokemons = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({
      message: "L'id du pokemon n'est pas valide"
    });
  }

  try {
    const pokemon = await pokemonModel.getPokemonSelonId(id);

    if (pokemon.length === 0) {
      return res.status(404).json({ error: `Aucun pokemon pour: ${id}` });
    }

    return res.status(200).json(pokemon[0]);
  } catch (erreur) {
    console.log(`Erreur PostgreSQL: ${erreur.message}`);
    return res.status(500).json({
      error: "Erreur interne du serveur"
    });
  }
};

export {
  getPokemons
};