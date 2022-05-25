'use strict';

const ORG = process.env.ORG || 'stockpickle';
const REPO = '${ORG}/strapi';
const BASE_IMAGE_NAME = `${ORG}/base`;
const STRAPI_IMAGE_NAME = `${ORG}/strapi`;
const NODE_VERSIONS = ['14-bullseye'];
const LATEST_NODE_VERSION = '14-bullseye';

module.exports = {
  ORG,
  REPO,
  BASE_IMAGE_NAME,
  STRAPI_IMAGE_NAME,
  NODE_VERSIONS,
  LATEST_NODE_VERSION,
};
