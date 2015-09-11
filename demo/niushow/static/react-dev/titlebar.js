/**
 * @page
 * @module
 * @author Rube
 * @date 15/9/10
 * @desc 顶部bar
 */

var React = require('React');

var TitleBar = React.createClass({
    render: function () {
        return (
            <div className='titlebar-container'>
                <ul className='titlebar-select-list'>
                    <li>NewShow 牛秀</li>
                    <li>时间轴</li>
                    <li>相册</li>
                </ul>
            </div>
        );
    }
});

module.exports = TitleBar;
