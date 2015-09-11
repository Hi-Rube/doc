/**
 * @page
 * @module
 * @author Rube
 * @date 15/9/10
 * @desc 主入口
 */

var React = require('React');
var TitleBar = require('./titlebar');
var Upload = require('./upload');

React.render(
    React.createElement("div", null, 
        React.createElement(TitleBar, null), 
        React.createElement(Upload, null)
    ),
    document.getElementById('main')
);
