'use strict';
var dataProvider = require('../../../data/polines/po/{poID}.js');
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
     */
    get: function poline_poid_list(req, res, next) {
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
