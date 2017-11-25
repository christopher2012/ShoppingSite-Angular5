'use strict';
var addressConstroller = require('../../api_server/constrollers/address');
/**
 * Operations on /addresses
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich adresów
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: addressConstroller.address_list,
    /**
     * summary: Dodawanie adresu
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: addressConstroller.address_create
};
