require('angular');
var oxyAPI = require('risejs').rise;
angular.module('liskApp').service('oxyAPI', function () {
  return oxyAPI;
});
