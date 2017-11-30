'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /pos/lines
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich zamówień razem z liniami zamówienia
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     * operationId: po_with_lines_list
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pos/lines',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
