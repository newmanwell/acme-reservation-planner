const client = require('./client.js');




const syncAndSeed = async() => {
  try {
    await client.connect();
    console.log('Connected to acme_reservation DB');






    await client.end();
    console.log('Disconnected from DB');
  } catch(error) {
    console.log(error);
  }

}

syncAndSeed();