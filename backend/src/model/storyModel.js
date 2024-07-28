const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.POSTGRES_DATABASE,
    ssl: {
        rejectUnauthorized: false
    }
});

const getAllStories = async () => {
    const result = await pool.query('SELECT * FROM stories');
    return result.rows;
};

module.exports = {
    getAllStories
};
