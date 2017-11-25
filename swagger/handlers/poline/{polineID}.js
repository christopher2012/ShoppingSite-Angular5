'use strict';
var dataProvider = require('../../data/poline/{polineID}.js');
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
     */
    delete: function poline_delete(req, res, next) {
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
