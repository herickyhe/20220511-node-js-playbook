const Product = require('../models/product');

////////////////////////////////////////////////////////////////

const getIndex = (req, res) => {
    Product.findAll()
        .then((products) => {
            res.status(200)
                .render('index', {
                    path: '/',
                    pageTitle: 'Book Your Books online',
                    products
                });
        })
        .catch((err) => {
            console.log('Product.findAll() error: ', err);
        })
};
const getCart = (req, res) => {
    req.user
        .getCart()
        .then((cart) => {
            return cart.getProducts()
                .then((products) => {
                    res.render('shop/cart', {
                        products
                    });
                })
                .catch((err) => {
                    console.log('getCart - cart.getProducts error: ', err);
                })
        })
        .catch((err) => {
            console.log('getCart - user.getCart error', err);
        })
}

module.exports = {
    getIndex,
    getCart,
}