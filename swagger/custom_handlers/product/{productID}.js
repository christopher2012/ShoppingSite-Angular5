'use strict';
var productController = require('../../../api_server/controllers/address');
/**
 * Operations on /product/{productID}
 */
module.exports = {
    /**
     * summary: Usuwanie produktu
     * description: 
     * parameters: productID
     * produces: application/xml, application/json
     * responses: 200, 404
     */
    delete: productController.product_delete
};
