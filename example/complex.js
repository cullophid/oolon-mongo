const mongo = require('../')
const db = mongo('mongodb://192.168.99.100:32770/test')
const users = db.collection('users');

const insert = () => {
  const query = {
    $docs: [
      {
        firstname: 'john',
        lastname: 'johnson',
        age: 67
      },
      {
        firstname: 'stephen',
        lastname: 'stephenson',
        age: 56
      }
    ]
  }
  return users.insertMany(query)
  .then(docs => console.log(docs))
  .catch(err => console.log(err))
}

const update = () => {
  const query = {
    $filter: {
      age: {$gt: 40}
    },
    $update: {
      $set: {
        lastname: 'oldie'
      }
    }
  }

  return users.updateMany(query)
    .then(docs => console.log(docs))
    .catch(err => console.log(err))

}

const count = () => {
  const query = {
    $query: {},
    $projection: {firstname:1, lastname:1}
  }

  return users.count(query)
    .then(docs => console.log(docs))
    .catch(err => console.log(err))
}

const find = () => {
  const query = {
    $query: {},
    $projection: {firstname:1, lastname:1}
  }

  return users.find(query)
    .then(docs => console.log(docs))
    .catch(err => console.log(err))
}

insert()
  .then(count)
  .then(update)
  .then(count)
  .then(find)
