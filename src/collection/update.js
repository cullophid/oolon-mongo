const R = require('ramda')
const INVALID_DOCUMENT = 'Invalid Document'

// {k:v} -> {k:v} -> Promise({_id:ObjectId})
const updateOne = R.curry((filter, update, options, col) =>
  filter && update ? Promise.resolve(col.updateOne(filter, update, options)) : Promise.reject(INVALID_DOCUMENT))

// {k:v} -> {k:v} -> Promise({_id:ObjectId})
const updateMany = R.curry((filter, update, options, col) =>
  filter && update ? Promise.resolve(col.updateMany(filter, update, options)) : Promise.reject(INVALID_DOCUMENT))


// Collection-> {k:v} -> Promise({_id:ObjectId)
exports.updateOne = coll => q =>
  coll
    .then(updateOne(q.$filter, q.$update, q.$options || {}))

exports.updateMany = coll => q =>
  coll
    .then(updateMany(q.$filter, q.$update, q.$options || {}))
