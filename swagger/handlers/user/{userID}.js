'use strict';
var dataProvider = require('../../data/user/{userID}.js');
/**
 * Operations on /user/{userID}
 */
module.exports = {
    /**
     * summary: Modyfikacja użytkownika
     * description: 
     * parameters: userID
     * produces: application/xml, application/json
     * responses: 200, 404
     */
    put: function user_update(req, res, next) {
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
     * summary: Usuwanie użytkownika
     * description: 
     * parameters: userID
     * produces: application/xml, application/json
     * responses: 200, 404
     */
    delete: function user_delete(req, res, next) {
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
