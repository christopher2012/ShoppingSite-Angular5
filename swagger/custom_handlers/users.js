'use strict';
var userController = require('../../api_server/controllers/user');
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
    get: userController.user_list,
    /**
     * summary: Dodawanie użytkownika
     * description: 
     * parameters: body
     * produces: application/json, text/json
     * responses: 200
     */
    post: userController.user_create
};
