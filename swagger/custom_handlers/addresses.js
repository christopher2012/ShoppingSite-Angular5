'use strict';
var addressController = require('../../api_server/controllers/address');
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
    get: addressController.address_list,
    /**
     * summary: Dodawanie adresu
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: addressController.address_create
};
