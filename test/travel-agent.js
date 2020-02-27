const chai = require("chai");
const expect = chai.expect;

import destinationsData from '../data/destinations-test-data';
import tripsData from '../data/trips-test-data';
import travelersData from '../data/travelers-test-data';
import TravelInfo from '../src/travel-info.js';
import TravelAgent from '../src/travel-agent';



let travelAgent;


describe ('Travel Agent', () => {

 beforeEach(() => {
   travelAgent = new TravelAgent(tripsData, destinationsData, travelersData)
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
