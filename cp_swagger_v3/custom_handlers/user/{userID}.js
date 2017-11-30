'use strict';
var userController = require('../../../api_server/controllers/user');
/**
 * Operations on /user/{userID}
 */
module.exports = {
    /**
     * summary: Usuwanie użytkownika
     * description: 
     * parameters: userID
     * produces: application/xml, application/json
     * responses: 200, 404
     */
    delete: userController.user_delete
};
