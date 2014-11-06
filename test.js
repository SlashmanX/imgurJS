var Imgur = require('./imgur');
var imgur = new Imgur('47af492bc2c7828');

imgur
	.image('dIYt4Wx')
	.then(function(res) {
		console.log(res);
	}).catch(function(err){
		console.error(err);
	});

imgur
	.album('GlsUM')
	.then(function(res) {
		console.log(res);
	}).catch(function(err){
		console.error(err);
	});