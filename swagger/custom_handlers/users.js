'use strict';
var userConstroller = require('../../api_server/constrollers/user');
/**
 * Operations on /users
 */
module.exports = {
    /**
     * summary: Pobieranie wszystkich użytkowników
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: userConstroller.user_list,
    /**
     * summary: Dodawanie użytkownika
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: userConstroller.user_create
};
