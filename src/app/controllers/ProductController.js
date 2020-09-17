class ProductController {

    //GET , /products
    index(req, res) {
        res.render('product');
    }

    //GET, /product/:sug
    show(req, res) {
        res.send('product-details');
    }
}

module.exports = new ProductController;