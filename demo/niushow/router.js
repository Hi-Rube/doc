var http = require('http');

var tokenController = require('./controller/token');
var photoController = require('./controller/photo');

module.exports = function (router) {

    router['^/$'] = http.fileHandler('./static/index.html');
    router['^/getToken$'] = tokenController.getAction;
    router['^/addPhoto$'] = photoController.addAction;
};