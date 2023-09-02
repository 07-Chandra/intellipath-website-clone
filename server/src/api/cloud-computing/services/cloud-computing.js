'use strict';

/**
 * cloud-computing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cloud-computing.cloud-computing');
