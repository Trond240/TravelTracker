const chai = require("chai");
const expect = chai.expect;
import travelersData from '../data/travelers-test-data';
import TravelAgent from '../src/travel-agent';


let travelAgent;

describe.only ('Travel Agent', () => {

 beforeEach(() => {
   travelAgent = new TravelAgent(travelersData)
});

describe ('default properties', () => {


  it('should be a function', () => {
    expect(TravelAgent).to.be.a('function');
  })

  it('should be an instance of a UserName', () => {
    expect(travelAgent).to.be.an.instanceof(TravelAgent);
  })

  it('should have a list of users', () => {
    expect(travelAgent.travelersData.length).to.equal(10);
  })

})
})
