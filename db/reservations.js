const client = require('./client.js');

const createReservation = async(date, partyCount, restId, custId) => {
  try {
    const { rows } = await client.query(`
        INSERT INTO reservation (date, party_count, restaurant_id, customer_id)
        VALUES ('${date}', ${partyCount}, ${restId}, ${custId})
        RETURNING *
      `)
      const reservation = rows[0];
      return reservation;
  } catch(error) {
    console.log(error);
  }
}

module.exports = { createReservation }