module.exports = connection => query =>
   connection.stats(query.$options)
