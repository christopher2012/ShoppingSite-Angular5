'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: category_list
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/categories',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Dodawanie kategorii
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     * operationId: category_create
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/categories',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
