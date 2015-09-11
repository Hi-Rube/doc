/**
 * @page
 * @module
 * @author Rube
 * @date 15/9/10
 * @desc 启动入口
 */

var http = require('http');
var mq = require('mq');
var Route = require('./router');

var route = {};
Route(route);

var svr = new http.Server(8080, new mq.Routing(route));
svr.run();