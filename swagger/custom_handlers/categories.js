'use strict';
var categoryController = require('../../api_server/controllers/category');
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
    get: categoryController.category_list,
    /**
     * summary: Dodawanie kategorii
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: categoryController.category_create
};
