const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const controller = require('./controller');

const app = express();

app.get('/getCustomers', async (req, res) => {
  try {
    const result = await controller.getCustomers();
    return res.send(result);
  } catch (err) {
    return res.send(err);
  }
});

app.delete('/customer/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await controller.deleteCustomer({ _id: ObjectID(id) });
    return res.send(result);
  } catch (err) {
    return res.send(err);
  }
});


app.post('/customer', async (req, res) => {
  try {
    const id = req.body.id;
    const doc = req.body.doc;
    const update = req.body.update;
    let result;
    if (update) {
      result = await controller.updateCustomerData({ _id: ObjectID(id) }, doc);
    } else {
      result = await controller.insertCustomer(doc);
    }
    return res.send(result);
  } catch (err) {
    return res.send(err);
  }
});


module.exports = app;
