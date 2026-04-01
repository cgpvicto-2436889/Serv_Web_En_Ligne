import pool from '../config/db.js';

const getPokemonSelonId = async () => {

    const requete = `
        SELECT nom, type_primaire, type_secondaire, pv, attaque, defense
        FROM pokemon
    `;

    try {
        const resultats = await pool.query(requete);

        // PostgreSQL retourne les résultats dans rows
        return resultats.rows;

    } catch (erreur) {
        console.log(`Erreur PostgreSQL :
                    ${erreur.message}` + erreur);
        throw erreur;
    }
};


export default{
    getPokemonSelonId,
};