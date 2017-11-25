'use strict';
var dataProvider = require('../data/pos.js');
/**
 * Operations on /pos
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich zamówień
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: function po_list(req, res, next) {
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
    },
    /**
     * summary: Dodawanie zamówienia
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: function po_create(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
