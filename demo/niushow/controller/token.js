/**
 * @page
 * @module
 * @author Rube
 * @date 15/9/10
 * @desc 生成上次所需token
 */

var QN = require('qn-fibjs');

var qn = QN.create(
    {
        accessKey: "iBzU3ertliHJGJSu9gSFqspzuO5MtOy5T6KstgRT",
        secretKey: "jqib526XDXHQ4gatn1AhO7FvGANx4TG3Wxv13U3s",
        bucket: "niushow",
        domain: "7xlore.com1.z0.glb.clouddn.com"
    }
);

module.exports = {
    getAction: function (r) {

        r.response.setHeader('Access-Control-Allow-Origin', '*');
        r.response.setHeader('Access-Control-Allow-Headers', 'If-Modified-Since');
        var token = {
            "uptoken": qn.uploadToken()
        };
        r.response.write(JSON.stringify(token));
    }
};
