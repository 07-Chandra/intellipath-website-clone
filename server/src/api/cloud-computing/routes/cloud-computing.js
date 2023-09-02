'use strict';

/**
 * cloud-computing router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cloud-computing.cloud-computing');
