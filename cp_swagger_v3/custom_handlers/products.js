'use strict';
var productController = require('../../api_server/controllers/product');
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
    get: productController.product_list,
    /**
     * summary: Dodawanie produktu
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: productController.product_create
};
