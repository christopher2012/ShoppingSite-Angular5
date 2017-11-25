'use strict';
var  poConstroller = require('../../api_server/constrollers/po');
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
    get: poConstroller.po_list,
    /**
     * summary: Dodawanie zamówienia
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: poConstroller.po_create
};
