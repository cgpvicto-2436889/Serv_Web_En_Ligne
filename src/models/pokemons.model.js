import pool from '../config/db.js';

const getPokemonSelonId = async (id) => {

    const requete = `
        SELECT nom, type_primaire, type_secondaire, pv, attaque, defense
        FROM pokemon
        WHERE id = $1
    `;

    try {
        const resultats = await pool.query(requete, [id]);

        // PostgreSQL retourne les résultats dans rows
        return resultats.rows;

    } catch (erreur) {
        console.log(`Erreur PostgreSQL :
                    ${erreur.message}`);
        throw erreur;
    }
};


export default{
    getPokemonSelonId,
};