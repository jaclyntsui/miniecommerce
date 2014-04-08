var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/miniecommerce');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;

var purchaseSchema = new Schema({
	name: String,
	email: String,
	date_purchase: Date,
	address: String,
	shipping_method: String,
	card_number: Number,
	card_expiration: String
})

var Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = {
	'Purchase': Purchase
};