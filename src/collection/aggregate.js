const R = require('ramda')
const INVALID_PIPELINE = 'Invalid Pipeline'

// {k:v} -> {k:v} -> Promise({_id:ObjectId})
const aggregate = R.curry((pipeline, options, col) =>
  pipeline ? Promise.resolve(col.aggregate(pipeline, options)) : Promise.reject(INVALID_PIPELINE))

// Collection-> {k:v} -> Promise({_id:ObjectId)
exports.aggregate = coll => query =>
  coll
    .then(aggregate(query.$pipeline, query.$options || {}))
