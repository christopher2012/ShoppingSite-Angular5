'use strict';
var dataProvider = require('../data/products.js');
/**
 * Operations on /products
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich produktów
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: function product_list(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Dodawanie produktu
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: function product_create(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
