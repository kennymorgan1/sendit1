'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);
var should = _chai2.default.should();

describe('Parcels', function () {
    // test the get route
    describe('GET/ parcels', function () {
        it('it should GET all the parcels', function (done) {
            _chai2.default.request(_app2.default).get('/api/v1/parcels').end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    });

    // test the post route
    describe('POST/ parcels', function () {
        it('it should POST a parcel with pages field', function (done) {
            var parcel = {
                "name": "cargo3",
                "email": "cargo3@sendit.com",
                "local": "loc3",
                "category": "cat3",
                "destination": "dest3"
            };
            _chai2.default.request(_app2.default).post('/api/v1/parcels').send(parcel).end(function (err, res) {
                res.should.have.status(201);
                res.body.should.be.a('object');
                done();
            });
        });
    });

    //test the /GET/:id route
    describe('GET/:parcelid parcel', function () {
        it('it should GET a parcel by the given id', function (done) {
            _chai2.default.request(_app2.default).get('/api/v1/parcelId').end(function (err, res) {
                res.should.have.status(404);
                res.body.should.be.a('object');
                done();
            });
        });
    });

    describe('Users', function () {
        describe('GET/ users', function () {
            it('it should GET all the parcels sent by a given user', function (done) {
                _chai2.default.request(_app2.default).get('/api/v1/users/:userId/parcels').end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
            });
        });
    });
});