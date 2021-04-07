const PROXY_CONFIG = {
  '/api/*': {
    'target': `http://eacodingtest.digital.energyaustralia.com.au/`,
    'secure': true,
    'logLevel': 'debug',
  },
};

module.exports = PROXY_CONFIG;
