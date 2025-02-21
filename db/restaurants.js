const client = require('./client.js');

const createRestaurant = async(restaurantName) => {
  try {
    const { rows } = await client.query(`
      INSERT INTO restaurant (name)
      VALUES ('${restaurantName}')
      RETURNING *
      `)
      const restaurant = rows[0];
      return restaurant;
  } catch(error) {
    console.log(error);
  }
}

module.exports = { createRestaurant };