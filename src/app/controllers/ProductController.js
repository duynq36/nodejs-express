const Product = require('../models/Product');

class ProductController {

    //GET , /products
    index(req, res) {

        Product.find({}, function (err, products) {
            // docs.forEach
            if(!err) {
                res.json(products);
            } else {
                res.status(500).json({ error: 'ERROR' })
            }
        });
        // res.render('product');
    }

    //GET, /product/:sug
    show(req, res) {
        res.send('product-details');
    }
}

module.exports = new ProductController;