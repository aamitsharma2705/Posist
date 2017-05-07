const customer = db => ({
  getCustomers(index = 0) {
    return new Promise((resolve, reject) => {
      db.collection('customers').find()
      .sort([['_id', 1]])
      .skip(index)
      .limit(50)
      .toArray((err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  },

  updateCustomer(query, doc) {
    return new Promise((resolve, reject) => {
      db.collection('customers').update(query, doc, (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    });
  },

  deleteCustomer(query) {
    return new Promise((resolve, reject) => {
      db.collection('customers').remove(query, (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    });
  },

  insertCustomer(doc) {
    return new Promise((resolve, reject) => {
      db.collection('customers').insert(doc, (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    });
  },
});

module.exports = customer;
