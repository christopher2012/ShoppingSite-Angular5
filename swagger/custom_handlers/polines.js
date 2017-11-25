'use strict';
var polineConstroller = require('../../api_server/constrollers/poline');
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
    get: polineConstroller.poline_create,
    /**
     * summary: Dodawanie lini zamówienia
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: polineConstroller.poline_create
};
