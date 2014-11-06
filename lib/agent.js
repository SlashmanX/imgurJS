var request = require('superagent');
var Q = require('q');
var _ = require('underscore');
var async = require('async');
var endpoints = require('./endpoints.js');
var client_id = '';
var self;

var Agent = function(client_id) {
	this.client_id = client_id;
	self = this;
};

Agent.prototype.setClientId = function(client_id) {
	this.client_id = clientId;
};

Agent.prototype.get = function(endpoint, getVariables) {
	var defer = Q.defer();

	getVariables = getVariables || {};

	request
		.get(endpoints.BASE_URL + endpoint)
		.set('Authorization', 'Client-ID '+ this.client_id)
		.set('User-Agent', 'imgurjs 0.0.1 by SlashmanX')
		.query(getVariables)
		.end(function(res) {
			if(res.ok) {
				defer.resolve(JSON.stringify(res.body));
			} else {
				defer.reject(res.text);
			}
		});

	return defer.promise;
};

Agent.prototype.post = function(endpoint, postVariables) {
	var defer = Q.defer();

	postVariables = postVariables || {};

	request
		.post(endpoints.BASE_URL + endpoint)
		.set('Authorization', 'Client-ID '+ this.client_id)
		.set('User-Agent', 'imgurjs 0.0.1 by SlashmanX')
		.type('application/json')
		.send(postVariables)
		.end(function(res) {
			if(res.ok) {
				defer.resolve(JSON.stringify(res.body));
			} else {
				defer.reject(res.text);
			}
		});

	return defer.promise;
};

Agent.prototype.image = {
	info: function(id) {
		return self.get(endpoints.image.info.replace('{id}', id));
	}
}

Agent.prototype.album = {
	info: function(id) {
		return self.get(endpoints.album.info.replace('{id}', id));
	}

}

module.exports = Agent;