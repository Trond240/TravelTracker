const chai = require("chai");
const expect = chai.expect;
// chai.use(spies);

import destinationsData from '../data/destinations-test-data';
import tripsData from '../data/trips-test-data';
import travelersData from '../data/travelers-test-data';
import TravelInfo from '../src/travel-info.js';
import Travelers from '../src/travelers';


let traveler;
let userID = 2;

describe ('Travelor', () => {

 beforeEach(() => {
   traveler = new Travelers(tripsData, destinationsData, travelersData[0])
 });

describe('default properties', () => {

  it('should be a function', () => {
    expect(Travelers).to.be.a('function');
  })

  it('should be an instance of a UserName', () => {
    expect(traveler).to.be.an.instanceof(Travelers);
  })

  it('a travelor should have a unique id', () => {
    expect(traveler.travelersData.id).to.equal(1);
  })

  it('a travelor should have a unique name', () => {
    expect(traveler.travelersData.name).to.equal('Ham Leadbeater');
  })

  it('a travelor should have a unique name', () => {
    expect(traveler.travelersData.name).to.equal('Ham Leadbeater');
  })

  it('a travelor should have a unique traveler type', () => {
    expect(traveler.travelersData.travelerType).to.equal('relaxer');
  })

describe('default properties', () => {

  it('should be able to calculate the total amount spent', () => {
    expect(traveler.getUsersTotatlSpent(userID)).to.equal(25739);
  })

  it('should be able to get trip total', () => {
    expect(traveler.getSingleTripTotal(traveler.tripsData[0])).to.equal(1370);
  })

  it('should be able to calculate agency fee', () => {
    expect(traveler.getAgencyFee(traveler.tripsData[0])).to.equal(137);
  })


  it('should be able to find a single trip', () => {
    expect(traveler.findTripInfo(traveler.tripsData[0])).to.deep.equal({
      id: 1,
      userID: 44,
      destinationID: 49,
      travelers: 1,
      date: '2019/09/16',
      duration: 8,
      status: 'approved',
      suggestedActivities: []
    })
  })

  it('should be able to search for a destination by name', () => {
    expect(traveler.searchDistinationByName('Lima, Peru')).to.deep.equal({
    id: 1,
    destination: 'Lima, Peru',
    estimatedLodgingCostPerDay: 70,
    estimatedFlightCostPerPerson: 400,
    image: 'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
    alt: 'overview of city buildings with a clear sky'
    });
  })

  describe('localStorage', () => {

   // it.only('should be able to save information local storage', () => {
   //   global.localStorage = {}
   //   chai.spy.on(localStorage, ['setItem'], () => {})
   //   traveler.bookNewTrip(1, 1, 44, 3, "2019/09/16", 8, "pending", []);
   //   expect(localStorage.setItem).to.be.called(1);
   //   expect(localStorage.setItem).to.be.called.with('travelBookings', JSON.stringify({
   //     id: 1,
   //     userID: 1,
   //     destinationID: 44,
   //     travelers: 3,
   //     date: "2019/09/16",
   //     duration: 8,
   //     status: "pending",
   //     suggestedActivities: []
   // }))
   // })
})
})
})
})
