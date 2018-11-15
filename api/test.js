import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './app';

chai.use(chaiHttp);
let should = chai.should();



describe('Parcels', ()=> {
// test the get route
describe('GET/ parcels', () => {
    it('it should GET all the parcels', (done) => {
        chai.request(app)
        .get('/api/v1/parcels')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
        done();
        });
    });
});

// test the post route
describe('POST/ parcels', () => {
    it('it should POST a parcel with pages field', (done) => {
        const parcel = {
            "name": "cargo3",
            "email": "cargo3@sendit.com",
            "local": "loc3",
            "category": "cat3",
            "destination": "dest3"
        }
        chai.request(app)
            .post('/api/v1/parcels')
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
            chai.request(app)
            .get('/api/v1/parcelId')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
            done();
            });
        });
    });

    describe('Users', ()=> {
        describe('GET/ users', () => {
            it('it should GET all the parcels sent by a given user', (done) => {
                chai.request(app)
                .get('/api/v1/users/:userId/parcels')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                done();
                });
            });
        });
    });
});