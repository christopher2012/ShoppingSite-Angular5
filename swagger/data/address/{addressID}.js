'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /address/{addressID}
 */
module.exports = {
    /**
     * summary: Modyfikacja adresu
     * description: 
     * parameters: addressID
     * produces: application/xml, application/json
     * responses: 200, 404
     * operationId: address_update
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/address/{addressID}',
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
                path: '/address/{addressID}',
                operation: 'put',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Usuwanie adresu
     * description: 
     * parameters: addressID
     * produces: application/xml, application/json
     * responses: 200, 404
     * operationId: address_delete
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/address/{addressID}',
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
                path: '/address/{addressID}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
