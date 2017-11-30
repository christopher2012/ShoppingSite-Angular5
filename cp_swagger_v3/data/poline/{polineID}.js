'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /poline/{polineID}
 */
module.exports = {
    /**
     * summary: Usuwanie lini zamówienia
     * description: 
     * parameters: polineID
     * produces: application/xml, application/json
     * responses: 200, 404
     * operationId: poline_delete
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/poline/{polineID}',
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
                path: '/poline/{polineID}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
