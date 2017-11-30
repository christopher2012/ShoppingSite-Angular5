'use strict';
var categoryController = require('../../../api_server/controllers/category');
/**
 * Operations on /category/{categoryID}
 */
module.exports = {
    /**
     * summary: Usuwanie kategorii
     * description: 
     * parameters: categoryID
     * produces: application/xml, application/json
     * responses: 200, 404
     */
    delete: categoryController.category_delete
};
