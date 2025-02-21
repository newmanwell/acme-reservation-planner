const express = require('express');
const app = express();
const port = 3000;



app.use(express.json());

const client = require('./db/client.js');
client.connect();

const { createCustomer, fetchCustomers } = require('./db/customers.js');
const { createRestaurant, fetchRestaurants } = require('./db/restaurants.js');
const { createReservation, destroyReservation } = require('./db/reservations.js')

// Add a customer
app.post('/api/customers', async(req, res) => {
  const { name } = req.body;

  try {
    const newCustomer = await createCustomer(name);
    res.send(newCustomer);
  } catch(error) {
    console.log(error);
  }
});

// Show customers
app.get('/api/customers', async(req, res) => {
  try {
    res.send(await fetchCustomers());
  } catch(error) {
    console.log(error);
  }
});

// Add a restaurant
app.post('/api/restaurants', async(req, res) => {
  const { name } = req.body;

  try {
    const newRestaurant = await createRestaurant(name);
    res.send(newRestaurant);
  } catch(error) {
    console.log(error);
  }
});

// Show Restaurants
app.get('/api/restaurants', async(req, res) => {
  try {
    res.send(await fetchRestaurants());
  } catch(error) {
    console.log(error);
  }
});

// Add reservation
app.post('/api/customers/:id/reservations', async(req, res) => {
  const { id } = req.params;
  const { restaurant_id, date, party_count } = req.body;

  try {
    const newReservation = await createReservation(date, party_count, restaurant_id, id)
    res.status(201).send(newReservation);
  } catch(error) {
    console.log(error);
  }
});

// DESTROY!!!!!! Reso
app.delete('/api/customers/:customer_id/reservations/:id', async(req, res) =>{
  const { id } = req.params;

  try {
    const seekAndDestroy = await destroyReservation(id);
    res.send(204);
  } catch(error) {
    console.log(error);
  }
})

app.listen(port, () => console.log(`Listening on port: ${port}`));