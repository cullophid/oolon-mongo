module.exports = connection => query =>
   connection.stats(query ? query.$options : {})
