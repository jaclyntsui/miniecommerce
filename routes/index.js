
/*
 * GET home page.
 */

var models = require("../models/index")

//rendering homepage
exports.index = function(req, res){
  res.render('index');
};

//rendering purchase form
exports.purchase_form = function(req, res){
  res.render('purchase_form');
};

exports.item_list = function(req, res){
  res.render('purchase_form');
};


exports.history = function(req, res){
  res.render('history');
};