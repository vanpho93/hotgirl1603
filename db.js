const pg = require('pg');

const config = {
    host: 'localhost',
    port: 5432,
    database: 'NODE1603',
    user: 'postgres',
    password: 'khoapham'
};

const pool = new pg.Pool(config);

function query(sql, arrayData) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrayData, (errQuery, result) => {
                done(errQuery);
                if (errQuery) return reject(errQuery);
                resolve(result);
            });
        });
    });
}

module.exports = query;
