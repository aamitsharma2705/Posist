const dbClient = require('../../mongo');


async function getCustomers(index) {
  try {
    const client = await dbClient();
    const customers = await client.customer.getCustomers(index);
    return customers;
  } catch (err) {
    throw err;
  }
}

async function updateCustomerData(query, data) {
  try {
    const client = await dbClient();
    const res = await client.customer.updateCustomer(query, data);
    return res;
  } catch (err) {
    throw err;
  }
}


async function deleteCustomer(query) {
  try {
    const client = await dbClient();
    const res = await client.customer.deleteCustomer(query);
    return res;
  } catch (err) {
    throw err;
  }
}

async function insertCustomer(doc) {
  try {
    const client = await dbClient();
    const res = await client.customer.insertCustomer(doc);
    return res;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getCustomers,
  updateCustomerData,
  deleteCustomer,
  insertCustomer,
};
