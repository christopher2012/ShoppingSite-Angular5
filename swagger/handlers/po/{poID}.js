'use strict';
var dataProvider = require('../../data/po/{poID}.js');
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
     */
    delete: function po_delete(req, res, next) {
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
