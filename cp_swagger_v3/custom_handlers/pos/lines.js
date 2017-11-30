'use strict';
var poController = require('../../../api_server/controllers/po');
/**
 * Operations on /pos/lines
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich zamówień razem z liniami zamówienia
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: poController.po_with_lines_list
};
