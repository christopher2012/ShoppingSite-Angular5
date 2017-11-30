'use strict';
var polineController = require('../../../../api_server/controllers/poline');
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
    get: polineController.poline_po_list
};
