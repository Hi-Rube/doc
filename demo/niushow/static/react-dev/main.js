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
    <div>
        <TitleBar/>
        <Upload/>
    </div>,
    document.getElementById('main')
);
