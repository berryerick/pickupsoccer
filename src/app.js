const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

app.set('view engine', 'ejs');
app.set('views', 'views');


// Connection URL
const url = 'mongodb://localhost:27017';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  client.close();
});

app.get('/', function(req, res) {
  res.render('registration')
  // res.send("hello world")
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
