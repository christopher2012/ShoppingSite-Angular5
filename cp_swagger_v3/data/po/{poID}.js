'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /po/{poID}
 */
module.exports = {
    /**
     * summary: Usuwanie zamówienia
     * description: 
     * parameters: poID
     * produces: application/xml, application/json
     * responses: 200, 404
     * operationId: po_delete
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/po/{poID}',
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
                path: '/po/{poID}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
