'use strict';
var productConstroller = require('../../api_server/constrollers/product');
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
    get: productConstroller.product_list,
    /**
     * summary: Dodawanie produktu
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: productConstroller.product_create
};
