const R = require('ramda')
const INVALID_QUERY = 'Invalid Query'

// {k:v} -> {k:v} -> Promise({_id:ObjectId})
const count = R.curry((query, options, col) =>
  query ? Promise.resolve(col.count(query, options)) : Promise.reject(INVALID_QUERY))

// Collection-> {k:v} -> Promise({_id:ObjectId)
exports.count = coll => query =>
  coll
    .then(count(query.$query, query.$options || {}))
