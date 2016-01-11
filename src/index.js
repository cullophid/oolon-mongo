const connect = require('./connect')
const collection = require('./collection')

module.exports = url => {
  const connection = connect(url)

  return {
    collection: collection(connection),
  }
}
