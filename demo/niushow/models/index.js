/**
 * @page
 * @module
 * @author Rube
 * @date 15/9/10
 * @desc
 */

var db = require('db');
var config = require('../config');

var mdb = db.openMongoDB('mongodb://' + config.mongodb.host + '/' + config.mongodb.db);

exports.photo = mdb.getCollection('photo');
exports.album = mdb.getCollection('album');
