const R = require('ramda')
const find = require('./find')
const insert = require('./insert')
const count = require('./count')
const del = require('./delete')
const update = require('./update')

module.exports = R.curry((connection, collName) => {
  const coll = connection.then(db => db.collection(collName))

  return {
    find: find(coll),
    insertOne: insert.insertOne(coll),
    insertMany: insert.insertMany(coll),
    count: count.count(coll),
    deleteOne: del.deleteOne(coll),
    deleteMany: del.deleteMany(coll),
    updateOne: update.updateOne(coll),
    updateMany: update.updateMany(coll)
  }
})
