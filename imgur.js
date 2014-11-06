var Q = require('q');
var Agent = require('./lib/agent.js');
var agent;

var CLIENT_ID = '';

var Imgur = function(client_id) {
	this.CLIENT_ID = client_id;
	agent = new Agent(client_id);
}

Imgur.prototype.setClientId = function(client_id) {
	this.CLIENT_ID = client_id;
	agent.setClientId(client_id);
};

Imgur.prototype.image = function(id) {
	return agent.image.info(id);
};

Imgur.prototype.album = function(aid) {
	return agent.album.info(aid);
}

module.exports = Imgur;