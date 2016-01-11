const promisify = require('simple-promisify')
const R = require('ramda')
const INVALID_ARGUMENTS = 'Your must provide a query an projection'

// find
const _find = R.curry((query, projection, col) =>
		query && projection ? col.find(query, projection) : Promise.reject(INVALID_ARGUMENTS))

const _limit = R.curry((limit, cur) => limit ? cur.limit(limit) : cur)
const _skip = R.curry((skip, cur) => skip ? cur.skip(skip) : cur)
const _toArray = cur => promisify(cur, cur.toArray)()

const find = coll => query =>
	coll
		.then(_find(query.$query, query.$projection))
		.then(_limit(query.$limit))
		.then(_skip(query.$skip))
		.then(_toArray)

// findOne
const _findOne = R.curry((query, projection, col) =>
	query && projection ? promisify(col, col.findOne)(query, projection) : Promise.reject(INVALID_ARGUMENTS))

const findOne = coll => query =>
	coll.then(_findOne(query.$query, query.$projection))

module.exports = R.curry((connection, collName) => {
  const coll = connection.then(db => db.collection(collName))

  return {
    find: find(coll),
    findOne: findOne(coll)
  }
})
