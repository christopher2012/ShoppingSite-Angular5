'use strict';
var dataProvider = require('../../data/product/{productID}.js');
/**
 * Operations on /product/{productID}
 */
module.exports = {
    /**
     * summary: Modyfikacja produktu produktu
     * description: 
     * parameters: productID
     * produces: application/xml, application/json
     * responses: 200, 404
     */
    put: function product_update(req, res, next) {
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
     * summary: Usuwanie produktu
     * description: 
     * parameters: productID
     * produces: application/xml, application/json
     * responses: 200, 404
     */
    delete: function product_delete(req, res, next) {
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
