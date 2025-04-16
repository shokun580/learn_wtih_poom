const config = require('./appSettingSide')

var config = {

    development: {
        host: config.DEV_DB_HOST,
        user: config.DEV_DB_USER,
        password: config.DEV_DB_PASSWORD,
        database: config.DEV_DB_NAME,
        port: config.DEV_DB_PORT
    },
    production: {
        host: config.PROD_DB_HOST,
        user: config.PROD_DB_USER,
        password: config.PROD_DB_PASSWORD,
        database: config.PROD_DB_NAME,
        port: config.PROD_DB_PORT
    }

}

module.exports = {
    "dbConnection": config[process.env.START_PROJECT],
};