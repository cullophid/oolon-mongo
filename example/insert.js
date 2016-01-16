const mongo = require('../')
const db = mongo('mongodb://192.168.99.100:32770/test')
const users = db.collection('users');
const query = {
  $docs: [
    {
      firstname: 'han',
      lastname: 'hanson',
      age: 16
    },
    {
      firstname: 'dave',
      lastname: 'daveson',
      age: 55
    }
  ]
}

users.bulkInsert(query)
  .then(docs => console.log(docs))
  .catch(err => console.log(err))
