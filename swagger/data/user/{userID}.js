'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /user/{userID}
 */
module.exports = {
    /**
     * summary: Modyfikacja użytkownika
     * description: 
     * parameters: userID
     * produces: application/xml, application/json
     * responses: 200, 404
     * operationId: user_update
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userID}',
                operation: 'put',
                response: '200'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userID}',
                operation: 'put',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Usuwanie użytkownika
     * description: 
     * parameters: userID
     * produces: application/xml, application/json
     * responses: 200, 404
     * operationId: user_delete
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userID}',
                operation: 'delete',
                response: '200'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/{userID}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
