const knex = require('knex');
require('dotenv').config();
const knexConfig = require('../knexfile.js');
const environment = process.env.DB_ENV; 
module.exports = knex(knexConfig[environment]);