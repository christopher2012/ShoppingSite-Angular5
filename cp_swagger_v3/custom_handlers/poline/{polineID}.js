'use strict';
var polineController = require('../../../api_server/controllers/poline');
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
    delete: polineController.poline_delete
};
