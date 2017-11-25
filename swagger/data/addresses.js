'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /addresses
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich adresów
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     * operationId: address_list
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/addresses',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Dodawanie adresu
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     * operationId: address_create
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/addresses',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
