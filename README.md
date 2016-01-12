# oolon-mongo

Simple wrapper around mongoDB that allows you to write declarative queries.

## NOT READY FOR PRODUCTION USE
This library is under construction and should not be used in production!

## install

```
npm install oolon-mongo
```

## usage

```js

import mongo from 'oolon-mongo'

const db = mongo('mongodb://example.com:27017/db')

const query = {
  $query: {
    firstname: 'andreas'
  },
  $projection: {
    email: 1
  },
  $limit: 1,
  $skip: 1
}

db.collection('users').find(query)
  .then(users => console.log(users))
// =>
// [
//   {
//     _id: 5693b46880ba27a3aec9d313,
//     email: 'oolon@example.com'
//   }
// ]
```

## Why?

Writing declarative queries are much simpler and requires much less code.

## Support

currently we only support `find` and `findOne`, and the query properties

- $query,
- $projection
- $limit
- $skip
