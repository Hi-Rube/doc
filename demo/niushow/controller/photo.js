/**
 * @page
 * @module
 * @author Rube
 * @date 15/9/11
 * @desc 照片操作
 */

var Photo = require('../models/photo');
var photoCollection = require('../models').photo;

module.exports = {
    addAction: function (r) {

        r.response.setHeader('Access-Control-Allow-Origin', '*');
        r.response.setHeader('Access-Control-Allow-Headers', 'If-Modified-Since');

        var photoName = r.response.body.photoname;
        var photoUrl = r.response.body.photourl;

        var photo = new Photo();
        photo.photoname = photoName;
        photo.photourl = photoUrl;
        photoCollection.insert(photo);
    }
};
