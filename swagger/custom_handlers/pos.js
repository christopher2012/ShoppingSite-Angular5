'use strict';
var  poController = require('../../api_server/controllers/po');
/**
 * Operations on /pos
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich zamówień
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: poController.po_list,
    /**
     * summary: Dodawanie zamówienia
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: poController.po_create
};
