const faker = require('faker');
const client = require('mongodb');

let db;

client.connect('mongodb://localhost:27017/test', (err, database) => {
  if (err) { console.error(err); }
  db = database; // once connected, assign the connection to the global variable

  const count = 10;

  const arr = [];

  for (let i = 0; i < count; i++) {
    const obj = {
      Name: faker.name.findName(),
      Mobile: faker.phone.phoneNumber('+91-##########'),
      Phone: faker.phone.phoneNumber('+91-(###) ########'),
      Addresses: [{
        Flat: faker.random.number(3),
        Street: faker.address.streetAddress(),
        State: faker.address.state(),
        PinCode: faker.random.number(8),
      }],
      DOB: faker.date.past(1990),
      Email: faker.internet.email(),
    };
    arr.push(obj);
  }

  db.collection('customers').insert(arr, (e, result) => {
    console.log(result);
    console.log(e);
  });
  db.collection('customers').find().toArray((error, docs) => {
    docs.map((item) => {
      console.log(item);
    });
  });
});

