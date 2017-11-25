'use strict';
var categoryController = require('../../api_server/constrollers/category');
/**
 * Operations on /categories
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: categoryController.category_list

};
