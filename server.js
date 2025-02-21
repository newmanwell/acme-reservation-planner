const express = require('express');
const app = express();
const port = 3000;



app.use(express.json());

const client = require('./db/client.js');
client.connect();

const { createCustomer, fetchCustomers } = require('./db/customers.js');
const { createRestaurant, fetchRestaurants } = require('./db/restaurants.js');

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








app.listen(port, () => console.log(`Listening on port: ${port}`));