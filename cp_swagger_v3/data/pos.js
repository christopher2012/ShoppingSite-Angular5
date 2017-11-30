'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /pos
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich zamówień
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     * operationId: po_list
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pos',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Dodawanie zamówienia
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     * operationId: po_create
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pos',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
