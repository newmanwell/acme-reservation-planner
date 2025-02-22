const client = require('./client.cjs');

const dropTables = async() => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS reservation;
      DROP TABLE IF EXISTS customer;
      DROP TABLE IF EXISTS restaurant;
      `)
  } catch(error) {
    console.log(error);
  }
}

const createTables = async() => {
  try {
    await client.query(`
      CREATE TABLE customer (
        id SERIAL PRIMARY KEY,
        name VARCHAR(29) NOT NULL
      );

      CREATE TABLE restaurant (
        id SERIAL PRIMARY KEY,
        name VARCHAR(38) UNIQUE NOT NULL
      );

      CREATE TABLE reservation (
        id SERIAL PRIMARY KEY,
        date DATE NOT NULL,
        party_count INTEGER NOT NULL,
        restaurant_id INTEGER REFERENCES restaurant(id),
        customer_id INTEGER REFERENCES customer(id)
      );
    `);
  } catch(error) {
    console.log(error);
  }
}

const syncAndSeed = async() => {
  try {
    await client.connect();
    console.log('Connected to acme_reservation DB');

    console.log('Deleting Tables')
    await dropTables();
    console.log('Tables Deleted')

    console.log('Creating Tables');
    await createTables();
    console.log('Tables Created');

    await client.end();
    console.log('Disconnected from DB');
  } catch(error) {
    console.log(error);
  }

}

syncAndSeed();