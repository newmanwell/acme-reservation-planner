const client = require('./client.cjs');

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

const fetchRestaurants = async() => {
  try {
    const { rows } = await client.query(`
        SELECT * FROM restaurant  
      `)
      return rows;
  } catch(error) {
    console.log(error);
  }
}

module.exports = { createRestaurant, fetchRestaurants };