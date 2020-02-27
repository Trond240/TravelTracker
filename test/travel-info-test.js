const chai = require("chai");
const expect = chai.expect;
import destinationsData from '../data/destinations-test-data';
import tripsData from '../data/trips-test-data';

import TravelelInfo from '../src/travel-info.js';


let travelInfo;

describe ('Travel Info', () => {

 beforeEach(() => {
   travelerInfo = new TravelInfo(tripsData, destinationsData)
 });

describe ('default properties', () => {


  it('should be a function', () => {
    expect(TravelInfo).to.be.a('function');
  })

  it('should be an instance of a UserName', () => {
    expect(travelInfo).to.be.an.instanceof(TravelInfo);
  })

})
})
