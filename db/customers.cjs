const client = require('./client.cjs');

const createCustomer = async(customerName) => {
  try {
    const { rows } = await client.query(`
      INSERT INTO customer (name)
      VALUES ('${customerName}')
      RETURNING *;
      `);
      const customer = rows[0];
      return customer;
  } catch(error) {
    console.log(error);
  }
}

const fetchCustomers = async() => {
  try {
    const { rows } = await client.query(`
        SELECT * FROM customer;
      `)
      return rows;
  } catch(error) {
    console.log(error);
  }
}

module.exports = { createCustomer, fetchCustomers };