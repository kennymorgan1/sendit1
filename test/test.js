import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'supertest';
import app from '../app';

chai.use(chaiHttp);
let should = chai.should();

const parcels = [
    {parcelId: 1, name:'cargo1', email:'cargo1@sendit.com', local:'loc1', category:'cat1', destination:'dest1', status:'pending'},
    {parcelId: 2, name:'cargo2', email:'cargo2@sendit.com', local:'loc2', category:'cat2', destination:'dest2', status:'pending'},
    {parcelId: 3, name:'cargo3', email:'cargo3@sendit.com', local:'loc3', category:'cat3', destination:'dest3', status:'pending'}
]

// test the get route
describe('GET/ parcels', () => {
    it('it should GET all the parcels', (done) => {
        request(app)
        .get('/parcels')
        .end((err, res) => {
            res.should.have,status(200);
            res.body.should.be.a('array');
            res.body.should.have.property('name');
            res.body.should.have.property('email');
            res.body.should.have.property('local');
            res.body.should.have.property('category');
            res.body.should.have.property('destination');
            res.body.should.have.property('status');
        done();
        });
    });
});

// test the post route
describe('POST/ parcels', () => {
    it('it should not POST a parcel without pages field', (done) => {
        const parcel = {
            "name": "cargo3",
            "email": "cargo3@sendit.com",
            "local": "loc3",
            "category": "cat3",
            "destination": "dest3"
        }
        chai.request(app)
            .post('/parcels')
            .send(parcel)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('pages');
                res.body.errors.pages.should.have.property('kind').eql('requpred');
            done();
        });
    });
    it('it should POST a parcel without pages field', (done) => {
        const parcel = {
            "name": "cargo3",
            "email": "cargo3@sendit.com",
            "local": "loc3",
            "category": "cat3",
            "destination": "dest3"
        }
        chai.request(app)
            .post('/parcels')
            .send(parcel)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('email');
                res.body.should.have.property('local');
                res.body.should.have.property('category');
                res.body.should.have.property('destination');
                res.body.should.have.property('status');
            done();
        });
    });
});

//test the /GET/:id route
describe('GET/:parcelid parcel', () => {
    it('it should GET a parcel by the given id', (done) => {
        let parcel = new Parcel({
            "parcelId": 3,
            "name": "cargo3",
            "email": "cargo3@sendit.com",
            "local": "loc3",
            "category": "cat3",
            "destination": "dest3",
            "userId": 1,
            "status": "pending"
        });
        parcel.save((err, parcel) => {
            chai.request(app)
            .get('/parcels/' + parcel.parcelId)
            .send(parcel)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('email');
                res.body.should.have.property('local');
                res.body.should.have.property('category');
                res.body.should.have.property('destination');
                res.body.should.have.property('status');
                es.body.should.have.property('_parcelId').eql(book.parcelId);
            done();
            });
        });
    });
});

// test the /PUT/:parcelId request
describe('PUT/:parcelid parcel', () => {
    it('it should UPDATE a parcel by the given id', (done) => {
        let parcel = new Parcel({
            "parcelId": 3,
            "name": "cargo3",
            "email": "cargo3@sendit.com",
            "local": "loc3",
            "category": "cat3",
            "destination": "dest3",
            "userId": 1,
            "status": "pending"
        });
        parcel.save((err, parcel) => {
            chai.request(app)
            .put('/parcels/' + parcel.parcelId/cancel)
            .send({
                "parcelId": 3,
                "name": "cargo3",
                "email": "cargo3@sendit.com",
                "local": "loc3",
                "category": "cat3",
                "destination": "dest3",
                "userId": 1,
                "status": "cancelled"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.a.property('status').eql('cancelled')
            done();
            });
        });
    });
});