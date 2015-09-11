/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @page
	 * @module
	 * @author Rube
	 * @date 15/9/10
	 * @desc 主入口
	 */

	var React = __webpack_require__(1);
	var TitleBar = __webpack_require__(2);
	var Upload = __webpack_require__(3);

	React.render(
	    React.createElement("div", null, 
	        React.createElement(TitleBar, null), 
	        React.createElement(Upload, null)
	    ),
	    document.getElementById('main')
	);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = window.React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @page
	 * @module
	 * @author Rube
	 * @date 15/9/10
	 * @desc 顶部bar
	 */

	var React = __webpack_require__(1);

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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @page
	 * @module
	 * @author Rube
	 * @date 15/9/10
	 * @desc 上传页
	 */

	var React = __webpack_require__(1);
	var Qiniu = __webpack_require__(4);

	var uptokenUrl = 'http://localhost:8080/getToken';

	var UploadFile = React.createClass({displayName: "UploadFile",
	    getInitialState: function () {
	        return {
	            src: ''
	        };
	    },
	    render: function () {
	        var data = this.props.data;
	        return (
	            React.createElement("tr", null, 
	                React.createElement("td", {className: "upload-process-id"}, data.index + 1), 
	                React.createElement("td", {className: "upload-process-name"}, 
	                    React.createElement("div", {className: "upload-process-preview-container"}, 
	                        React.createElement("img", {className: "upload-process-preview", src: this.state.src})
	                    ), 
	                data.name), 
	                React.createElement("td", {className: "upload-process-size"}, data.size), 
	                React.createElement("td", {className: "upload-process-percent"}, data.percent)
	            )
	        );
	    },
	    componentDidMount: function () {
	        var reader = new FileReader();
	        var that = this;
	        reader.onload = function (evt) {
	            that.setState({src: evt.target.result});
	        };
	        reader.readAsDataURL(this.props.data.file);
	    }
	});

	var Upload = React.createClass({displayName: "Upload",
	    getInitialState: function () {
	        return {
	            number: 0,
	            files: []
	        };
	    },
	    render: function () {
	        var that = this;
	        return (
	            React.createElement("div", {id: "upload-container"}, 
	                React.createElement("div", {className: "upload-info"}, 
	                    React.createElement("div", {className: "upload-info-number"}, 
	                        "一共上传", this.state.number, "张照片"
	                    ), 
	                    React.createElement("a", {href: "#", id: "upload-upbtn"}, "添加")
	                ), 
	                React.createElement("table", {className: "upload-process"}, 
	                    React.createElement("tr", null, 
	                        React.createElement("td", {className: "upload-process-id"}, '#'), 
	                        React.createElement("td", {className: "upload-process-name"}, "名称"), 
	                        React.createElement("td", {className: "upload-process-size"}, "大小"), 
	                        React.createElement("td", {className: "upload-process-percent"}, "进度")
	                    ), 
	                
	                    this.state.files.map(function (item, index) {
	                        item.index = index;
	                        return (
	                            React.createElement(UploadFile, {data: item})
	                        );
	                    })
	                    
	                )
	            )
	        );
	    },
	    componentDidMount: function () {
	        var that = this;
	        var uploader = Qiniu.uploader({
	            runtimes: 'html5,flash,html4',
	            browse_button: 'upload-upbtn',
	            uptoken_url: uptokenUrl,
	            domain: 'http://7xlore.com1.z0.glb.clouddn.com/',
	            container: 'upload-container',
	            max_file_size: '100mb',
	            flash_swf_url: 'js/plupload/Moxie.swf',
	            max_retries: 3,
	            dragdrop: true,
	            drop_element: 'upload-container',
	            chunk_size: '4mb',
	            unique_names: true,
	            save_key: true,
	            init: {
	                'FilesAdded': function (up, files) {

	                    var file = files[0].getNative();
	                    console.log(file);
	                    var files = that.state.files;
	                    files.push({
	                        file: file,
	                        size: Math.floor(file.size / 1024) + 'K',
	                        percent: '0%',
	                        name: file.name.substring(0,10) + '...'
	                    });
	                    that.setState(files);

	                    plupload.each(files, function (file) {
	                        // 文件添加进队列后,处理相关的事情
	                    });
	                },
	                'BeforeUpload': function (up, file) {
	                    // 每个文件上传前,处理相关的事情
	                },
	                'UploadProgress': function (up, file) {
	                    // 每个文件上传时,处理相关的事情
	                },
	                'FileUploaded': function (up, file, info) {
	                    // 每个文件上传成功后,处理相关的事情
	                    // 其中 info 是文件上传成功后，服务端返回的json，形式如
	                    // {
	                    //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
	                    //    "key": "gogopher.jpg"
	                    //  }
	                    // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

	                    // var domain = up.getOption('domain');
	                    // var res = parseJSON(info);
	                    // var sourceLink = domain + res.key; 获取上传成功后的文件的Url
	                },
	                'Error': function (up, err, errTip) {
	                    //上传出错时,处理相关的事情
	                },
	                'UploadComplete': function () {
	                    //队列文件处理完毕后,处理相关的事情
	                }
	            }
	        });
	    }
	});

	module.exports = Upload;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = window.Qiniu;

/***/ }
/******/ ])