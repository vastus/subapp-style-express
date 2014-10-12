var request = require('supertest');

var app = require('./index.js');

describe('ae', function () {
	describe('GET /', function () {
		it('responds w/ status 200', function (done) {
			request(app)
			.get('/')
			.expect(200)
			.expect('AE: root')
			.end(function (err, res) {
				if (err) throw err;
				done();
			});
		});
	});

	describe('GET /artists', function () {
		it('responds w/ status 200', function (done) {
			request(app)
			.get('/artists')
			.expect(200)
			.expect('AE: artists')
			.end(function (err, res) {
				if (err) throw err;
				done();
			});
		});
	});
});

describe('oauth', function () {
	describe('GET /', function () {
		it('responds w/ status 200', function (done) {
			request(app)
			.get('/oauth')
			.expect(200)
			.expect('OAuth: root')
			.end(function (err, res) {
				if (err) throw err;
				done();
			});
		});
	});

	describe('GET /login', function () {
		it('responds w/ status 200', function (done) {
			request(app)
			.get('/oauth/login')
			.expect(200)
			.expect('OAuth: login')
			.end(function (err, res) {
				if (err) throw err;
				done();
			});
		});
	});
});

