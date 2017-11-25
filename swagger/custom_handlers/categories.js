'use strict';
var categoryConstroller = require('../../api_server/constrollers/category');
/**
 * Operations on /categories
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich kategorii
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: categoryConstroller.category_list,
    /**
     * summary: Dodawanie kategorii
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: categoryConstroller.category_create
};
