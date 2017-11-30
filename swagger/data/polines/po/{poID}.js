'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /polines/po/{poID}
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich lini zamówienia z podanym numerem zamówienia
     * description: 
     * parameters: poID
     * produces: application/json, text/json
     * responses: 200, 404
     * operationId: poline_poid_list
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/polines/po/{poID}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/polines/po/{poID}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    }
};
