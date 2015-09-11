/**
 * @page
 * @module
 * @author Rube
 * @date 15/9/10
 * @desc 顶部bar
 */

var React = require('React');

var TitleBar = React.createClass({displayName: "TitleBar",
    render: function () {
        return (
            React.createElement("div", {className: "titlebar-container"}, 
                React.createElement("ul", {className: "titlebar-select-list"}, 
                    React.createElement("li", null, "NewShow 牛秀"), 
                    React.createElement("li", null, "时间轴"), 
                    React.createElement("li", null, "相册")
                )
            )
        );
    }
});

module.exports = TitleBar;
