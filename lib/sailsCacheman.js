/**
 * Simple wrapper to wrap around the Cacheman nodejs package to integrate easily with SailsJS for caching.
 * @param {[string]} name Name the Cache Instance.
 */

var Cache = function (name, sailsInstance) {
   var Cacheman = require('cacheman');
   // var Sails = require('sails');
   var _ = require('underscore');
   var options = {};
   // Get configuration
   config = sails?sails.config.cacheman:sailsInstance.config.cacheman;
   if (config === undefined) {
        throw new Error('No configuration file found. Please add the configuration app/config/cacheman.js');
   }
   // if a valid driver is selected.
   if(_.indexOf(['memory', 'redis', 'mongo', 'file'], config.driver) < 0) {
        throw new Error("Invalid Driver selected. Please choose from ('memory', 'redis', 'mongo', 'file')");
   }

   var cache = new Cacheman(name, config[config.driver]);

   return cache;
};
module.exports = Cache;
