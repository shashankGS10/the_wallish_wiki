const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const sqlFilePath = path.join(__dirname,'stories.sql');
const sql = fs.readFileSync(sqlFilePath).toString();

client.connect()
    .then(() => client.query(sql))
    .then(() => {
        console.log('Database setup completed');
        return client.end();
    })
    .catch(err => {
        console.error('Error setting up database:', err);
        client.end();
    });
