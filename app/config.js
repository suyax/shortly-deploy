//refactor use mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shortlydb');
var db = mongoose.connection;
db.on('error', console.error.bind(conosle, 'connection error'));
db.once('open', function(){
  console.log('Mongo');
});

module.exports = db;


