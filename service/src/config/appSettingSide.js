require('dotenv').config();

module.exports = {
    START_PROJECT: process.env.START_PROJECT,

    PROD_DB_HOST: process.env.PROD_DB_HOST,
    PROD_DB_USER: process.env.PROD_DB_USER,
    PROD_DB_PASSWORD: process.env.PROD_DB_PASSWORD,
    PROD_DB_NAME: process.env.PROD_DB_NAME,
    PROD_DB_PORT: process.env.PROD_DB_PORT,

    DEV_DB_HOST: process.env.DEV_DB_HOST,
    DEV_DB_USER: process.env.DEV_DB_USER,
    DEV_DB_PASSWORD: process.env.DEV_DB_PASSWORD,
    DEV_DB_NAME: process.env.DEV_DB_NAME,
    DEV_DB_PORT: process.env.DEV_DB_PORT,
};