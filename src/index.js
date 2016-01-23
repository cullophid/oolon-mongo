const connect = require('./connect')
const collection = require('./collection')
const stats = require('./stats')

module.exports = url => {
  const connection = connect(url)

  return {
    collection: collection(connection),
    stats: stats(connection),
  }
}
