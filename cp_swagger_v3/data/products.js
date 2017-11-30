'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: product_list
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Dodawanie produktu
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     * operationId: product_create
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/products',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
