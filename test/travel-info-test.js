const chai = require("chai");
const expect = chai.expect;
import destinationsData from '../data/destinations-test-data';
import tripsData from '../data/trips-test-data';

import TravelInfo from '../src/travel-info.js';


let travelInfo;

describe ('Travel Info', () => {

 beforeEach(() => {
   travelInfo = new TravelInfo(tripsData, destinationsData)
 });

  it('should be a function', () => {
    expect(TravelInfo).to.be.a('function');
  })

  it('should be an instance of a UserName', () => {
    expect(travelInfo).to.be.an.instanceof(TravelInfo);
  })
describe.only ('trips default properties', () => {

  it('should have a unique id', () => {
    console.log(travelInfo.tripsData[0])
    expect(travelInfo.tripsData[0].id).to.equal(1);
  })

  it('should have a userId relating to a user', () => {
    expect(travelInfo.tripsData[0].userID).to.equal(44);
  })

  it('should have a destination ID', () => {
    expect(travelInfo.tripsData[0].destinationID).to.equal(49);
  })

  it('should have a number of travelers', () => {
    expect(travelInfo.tripsData[0].travelers).to.equal(1);
  })

  it('should have a travel date', () => {
    expect(travelInfo.tripsData[0].date).to.equal('2019/09/16');
  })

  it('should have a trip duration', () => {
    expect(travelInfo.tripsData[0].duration).to.equal(8);
  })

  it('should have a status', () => {
    expect(travelInfo.tripsData[0].status).to.equal('approved');
  })

  it('should have a list of suggested activities', () => {
    expect(travelInfo.tripsData[0].suggestedActivities).to.deep.equal([]);
  })

})
})
