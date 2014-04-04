var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/miniecommerce');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;

var purchaseSchema = new Schema({
	name: String,
	address: String,
	method: String,
	card_number: Number
})

Puchase = mongoose.model('Purchase', purchaseSchema);

exports.Purchase = Purchase;
