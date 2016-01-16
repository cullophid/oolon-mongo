const promisify = require('simple-promisify')
const R = require('ramda')
const INVALID_ARGUMENTS = 'Your must provide a query an projection'

// {k:v} -> {k:v} -> Promise(Cursor)
const _find = R.curry((query, projection, col) =>
		query && projection ? Promise.resolve(col.find(query, projection)) : Promise.reject(INVALID_ARGUMENTS))

// Number -> Cursor -> Cursor
const _limit = R.curry((limit, cur) => limit ? cur.limit(limit) : cur)
// {k:v} -> Cursor -> Cursor
const _sort = R.curry((order, cur) => order ? cur.sort(order) : cur)
// Number -> Cursor -> Cursor
const _skip = R.curry((skip, cur) => skip ? cur.skip(skip) : cur)
// Cursor -> Promise([{k:v}])
const _toArray = cur => promisify(cur, cur.toArray)()

// Promise(Collection) -> {k:v} -> Promise([{k:v}])
module.exports = coll => query =>
	coll
		.then(_find(query.$query, query.$projection))
		.then(_sort(query.$sort))
		.then(_limit(query.$limit))
		.then(_skip(query.$skip))
		.then(_toArray)
