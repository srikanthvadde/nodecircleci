const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')

const expect = chai.expect

chai.use(chaiHttp);


describe('/GET ', () => {

    it('it should connect', (done) => {
      chai.request(server)
          .get('/')
          .end((err, res) => {
            expect(res.text).to.equal("Hello world"); 
            done();
          });
    });
});


describe('/GET details', () => {

    it('it should GET details', (done) => {
      chai.request(server)
          .get('/getDetails')
          .end((err, res) => {
            expect(res.text).to.equal("Hello Divya srikanth"); 
            done();
          });
    });
});

describe('/GET plus', () => {

    it('it should GET plus', (done) => {
      chai.request(server)
          .get('/getplus')
          .end((err, res) => {
            expect(res.text).to.equal("Hello Divya srikanth noted"); 
            done();
          });
    });
});
