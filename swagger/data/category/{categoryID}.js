'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /category/{categoryID}
 */
module.exports = {
    /**
     * summary: Modyfikacja kategori
     * description: 
     * parameters: categoryID
     * produces: application/xml, application/json
     * responses: 200, 404
     * operationId: category_update
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/category/{categoryID}',
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
                path: '/category/{categoryID}',
                operation: 'put',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Usuwanie kategorii
     * description: 
     * parameters: categoryID
     * produces: application/xml, application/json
     * responses: 200, 404
     * operationId: category_delete
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/category/{categoryID}',
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
                path: '/category/{categoryID}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
