'use strict';
var dataProvider = require('../data/categories.js');
/**
 * Operations on /categories
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich kategorii
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: function category_list(req, res, next) {
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
     * summary: Dodawanie kategorii
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: function category_create(req, res, next) {
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
