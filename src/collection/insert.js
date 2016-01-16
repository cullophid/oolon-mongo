const R = require('ramda')
const INVALID_DOCUMENT = 'Invalid Document'

// {k:v} -> {k:v} -> Promise({_id:ObjectId})
const insertOne = R.curry((doc, options, col) =>
  doc ? Promise.resolve(col.insertOne(doc, options)) : Promise.reject(INVALID_DOCUMENT))

// {k:v} -> {k:v} -> Promise({_id:ObjectId})
const insertMany = R.curry((docs, options, col) =>
  docs ? Promise.resolve(col.insertMany(docs, options)) : Promise.reject(INVALID_DOCUMENT))

// Collection-> {k:v} -> Promise({_id:ObjectId)
exports.insertOne = coll => query =>
  coll
    .then(insertOne(query.$doc, query.$options || {}))

exports.insertMany = coll => query =>
  coll
    .then(insertMany(query.$docs, query.$options || {}))
