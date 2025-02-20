const express = require('express');
const app = express();
const port = 3000;



app.use(express.json());

const client = require('./db/client.js');
client.connect();

const { createCustomer } = require('./db/customers.js')

// Add a customer
app.post('/api/customers', async(req, res) => {
  const { name } = req.body;

  try {
    const newCustomer = await createCustomer(name);
    res.send(newCustomer);
  } catch(error) {
    console.log(error);
  }
})









app.listen(port, () => console.log(`Listening on port: ${port}`));