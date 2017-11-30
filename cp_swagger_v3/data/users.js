'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /users
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich użytkowników
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     * operationId: user_list
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Dodawanie użytkownika
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     * operationId: user_create
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
