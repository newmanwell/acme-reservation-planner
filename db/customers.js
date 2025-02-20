const client = require('./client.js');

const createCustomer = async(customerName) => {
  try {
    const { rows } = await client.query(`
      INSERT INTO customer (name)
      VALUES ('${customerName}')
      RETURNING *;
      `);
      const customer = rows[0];
      return customer;
    console.log(x);
  } catch(error) {
    console.log(error);
  }
}

module.exports = { createCustomer };