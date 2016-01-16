const mongo = require('../')
const db = mongo('mongodb://192.168.99.100:32770/test')
const users = db.collection('users');
const query = {
  $query: {age: {$gt: 18}},
  $projection: {firstname: 1, lastname: 1, age: 1},
  $sort: {age: 1},
  $limit: 0,
  $skip: 1
}

users.find(query)
  .then(docs => console.log(docs))
  .catch(err => console.log(err))
