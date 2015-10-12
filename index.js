var WXBizMsgCrypt = require('wechat-crypto');
var config = require('./config');
var cryptor = new WXBizMsgCrypt(config.token, config.key, config.appid);
var text = 'bpe+HdyPe4wNx/P/LL9OwX+803cjD+y6mgs7bD7sLViE5+bNfjTRsMce2HwBUbSWfAZhLFYjwTlII+zkny/LflO4Q3EiU4eTA3WAGu+g1c25AaOgxm0myz2s3zvK0JqjNC2OTo5A0WzAVA5IEaYMlhMsgKMHjI6eweO4/xdQY+jQITv1gQdidSXyPLJlyWao/GEv9k9UpJ0xD1m4cRq99lcGvIinFEqlB4t0rE2spt/vqx9eA/qvHd4Nvvfkr2PsU4eWzezmVd8XmY+lN7Ebz4igLdrzY+j+tcVrdCCx1COABIJeYfsC+Om+LBDS1iQwAxHV9WdIeYvMuqb28r7rzm6T7kRUH2rfrExgN0gzuDVFQILH0SALe2clM6HC9Ic4eDogBLC4qSDP/Zj5T0cfP7Zs7wXTip4T3p4XlOYcij3qR9OtdG5PR1ybM3/WPKQS3l8c2VXeIY9GuYQR13zq4A==';
var decrypted = cryptor.decrypt(text);
console.log(decrypted.message);
 var xml2js = require('xml2js');
var parser =new xml2js.Parser();
parser.parseString(decrypted.message, function (err, result) {
	console.log('error',err);
    console.log('result',result);
});

