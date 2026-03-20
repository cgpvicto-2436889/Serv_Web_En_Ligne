
import pool from '../config/db.js';

const getPokemonSelonId = async (id) => {

    // On récupère toutes les pokemons pour une langue donnée
    const requete = `
        SELECT nom, type_primaire, type_secondaire, pv, attaque, defense
        FROM pokemon

        WHERE id = ?
    `;

    try {
        // mysql2 retourne [resultats, infos]
        const [resultats] = await pool.query(requete, [id]);

        // On retourne tout le tableau (pas juste un élément)
        return resultats;

    } catch (erreur) {
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} :
                    ${erreur.sqlMessage}`);
        throw erreur;
    }
};

const getLangueSalutation = async () => {

    // On récupère toutes les salutations pour une langue donnée
    const requete = `
        SELECT langue
        FROM salutations
    `;

    try {
        // mysql2 retourne [resultats, infos]
        const [resultats] = await pool.query(requete);

        // On retourne tout le tableau (pas juste un élément)
        return [resultats];

    } catch (erreur) {
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} :
                    ${erreur.sqlMessage}`);

        throw erreur;
    }
};

export default{
    getPokemonSelonId,
    getLangueSalutation
};