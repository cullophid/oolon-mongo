const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

module.exports = (url) => new Promise((resolve, reject) =>
	MongoClient.connect(url, (err, db) => err ? reject(err) : resolve(db)))
