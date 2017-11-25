'use strict';
var polineController = require('../../api_server/controllers/poline');
/**
 * Operations on /polines
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich lini zamówienia
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: polineController.poline_create,
    /**
     * summary: Dodawanie lini zamówienia
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: polineController.poline_create
};
