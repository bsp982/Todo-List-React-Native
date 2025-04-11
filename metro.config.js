const { getDefaultConfig } = require('expo/metro-config');

module.exports = function(api) {
  const config = getDefaultConfig(__dirname);
  return config;
};