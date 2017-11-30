'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /polines
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich lini zamówienia
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     * operationId: poline_list
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/polines',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Dodawanie lini zamówienia
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     * operationId: poline_create
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/polines',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
