'use strict';
var dataProvider = require('../../data/pos/lines.js');
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
     */
    get: function po_with_lines_list(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
