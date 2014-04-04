
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Miniecommerce' });
};

exports.purchase_form = function(req, res){
  res.render('purchase_form', { title: 'Miniecommerce' });
};