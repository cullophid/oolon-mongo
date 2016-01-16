const R = require('ramda')
const INVALID_FILTER = 'Invalid Filter'

// {k:v} -> {k:v} -> Promise({_id:ObjectId})
const deleteOne = R.curry((filter, options, col) =>
  filter ? Promise.resolve(col.deleteOne(filter, options)) : Promise.reject(INVALID_FILTER))

// {k:v} -> {k:v} -> Promise({_id:ObjectId})
const deleteMany = R.curry((filter, options, col) =>
  filter ? Promise.resolve(col.deleteMany(filter, options)) : Promise.reject(INVALID_FILTER))

// Collection-> {k:v} -> Promise({_id:ObjectId)
exports.deleteOne = coll => query =>
  coll
    .then(deleteOne(query.$filter, query.$options || {}))

exports.deleteMany = coll => query =>
  coll
    .then(deleteMany(query.$filter, query.$options || {}))
