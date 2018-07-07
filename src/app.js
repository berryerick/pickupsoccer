const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

let ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', './views');


// Connection URL
const url = 'mongodb://localhost:27017';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  client.close();
});

app.get('/', (req, res) => res.send('Hello World! my name is erick'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
