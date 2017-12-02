'use strict';
var dataProvider = require('../../data/address/{addressID}.js');
/**
 * Operations on /address/{addressID}
 */
module.exports = {
    /**
     * summary: Modyfikacja adresu
     * description: 
     * parameters: addressID
     * produces: application/xml, application/json
     * responses: 200, 404
     */
    put: function address_update(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Usuwanie adresu
     * description: 
     * parameters: addressID
     * produces: application/xml, application/json
     * responses: 200, 404
     */
    delete: function address_delete(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['delete']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
