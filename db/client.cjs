const { Client } = require('pg');
const client = new Client('postgres://localhost:5432/acme_reservation');

module.exports = client;