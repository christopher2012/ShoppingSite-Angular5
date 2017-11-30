'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /product/{productID}
 */
module.exports = {
    /**
     * summary: Usuwanie produktu
     * description: 
     * parameters: productID
     * produces: application/xml, application/json
     * responses: 200, 404
     * operationId: product_delete
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/product/{productID}',
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
                path: '/product/{productID}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
