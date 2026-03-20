import pokemonModel from "../models/pokemons.model.js";

const getPokemons = async (req, res) => {
  const id = req.params.id;

  if (!req.params.id) {
    res.status(400)
    res.send({
      message: "L'id du pokemon n'est pas valide"
    })
    return;
  }

  try {
    const pokemon = await pokemonModel.getPokemonSelonId(id);

    if (pokemon.length === 0) {
      return res.status(404).json({ error: `Aucun pokemon pour: ${id}`});
    }

    return res.status(200).json(pokemon[0]);
  }
  catch (erreur) {
    console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : 
    ${erreur.sqlMessage}`);
    throw erreur;
  }
}
export {
  getPokemons
}

const getSalutationsPourLangue = async (req, res) => {

  try {
    // Appel à la fonction getSalutations dans le modèle
    const salutation = await pokemonModel.getLangueSalutation(req);

    return res.json(salutation);
  } 
  catch (erreur) {
    console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : 
    ${erreur.sqlMessage}`);
    throw erreur;
  }
}  
export {
    getSalutationsPourLangue
}