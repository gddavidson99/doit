//config.js
/** TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */

var Twit = require('twit')

module.exports = {
  consumer_key: 'cs1x7fnz5P1SkJkPSu8bZu3An',
  consumer_secret: 'Kdx2TkIydkMsI8PRDiwXDDIBwG2i9sDLVDLK5FwBgR2wPqEsjR',
  access_token: '921804881626886145-Ff1VOTEf0U2bxilR3c48CB7XEhGB3v5',
  access_token_secret: '8nQ7Zktts1UqcE5PX6VTne0qzBW6XcOhVHccwtd3wRBW1'
}

var config = {
  consumer_key: 'cs1x7fnz5P1SkJkPSu8bZu3An',
  consumer_secret: 'Kdx2TkIydkMsI8PRDiwXDDIBwG2i9sDLVDLK5FwBgR2wPqEsjR',
  access_token: '921804881626886145-Ff1VOTEf0U2bxilR3c48CB7XEhGB3v5',
  access_token_secret: '8nQ7Zktts1UqcE5PX6VTne0qzBW6XcOhVHccwtd3wRBW1'
}

var Twitter = new Twit(config);
