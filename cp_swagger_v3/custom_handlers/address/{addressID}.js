'use strict';
var addressController = require('../../../api_server/controllers/address');
/**
 * Operations on /address/{addressID}
 */
module.exports = {
    /**
     * summary: Usuwanie adresu
     * description: 
     * parameters: addressID
     * produces: application/xml, application/json
     * responses: 200, 404
     */
    delete: addressController.address_delete
};
