import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
let should = chai.should();

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