'use strict';
var poController = require('../../../api_server/controllers/po');
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
    delete: poController.po_delete
};
