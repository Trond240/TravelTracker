const chai = require("chai");
const expect = chai.expect;
import destinationsData from '../data/destinations-test-data';
import tripsData from '../data/trips-test-data';

import TravelInfo from '../src/travel-info.js';


let travelInfo;
let userID = 2;

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
describe ('trips default properties', () => {

  it('should have a unique id', () => {
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

describe('destinations default properties', () => {

  it('should have a unique id', () => {
    expect(travelInfo.destinationsData[0].id).to.equal(1);
  })

  it('should have a travel destination', () => {
    expect(travelInfo.destinationsData[0].destination).to.equal('Lima, Peru');
  })

  it('should have a estimated Lodging Cost Per Day', () => {
    expect(travelInfo.destinationsData[0].estimatedLodgingCostPerDay).to.equal(70);
  })

  it('should have a estimated Flight Cost Per Person', () => {
    expect(travelInfo.destinationsData[0].estimatedFlightCostPerPerson).to.equal(400);
  })

  it('should have a image', () => {
    expect(travelInfo.destinationsData[0].image).to.equal('https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80');
  })

  it('should have a alt tag', () => {
    expect(travelInfo.destinationsData[0].alt).to.equal('overview of city buildings with a clear sky');
  })

describe('Travel Info Methods', () => {

  it('should be able to return a list a users travel history', () => {
    expect(travelInfo.getTravelersInformation(userID).length).to.equal(6);
  })

  it('should get the destination name for a trip', () => {
    expect(travelInfo.getDistinationName(userID).length).to.equal(6);
  })
  
})
})
})
})
