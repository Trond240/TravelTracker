const chai = require("chai");
const expect = chai.expect;
import travelersData from '../data/travelers-test-data';

import Travelers from '../src/travelers';


let traveler;

describe ('Travelor', () => {

 beforeEach(() => {
   traveler = new Travelers(travelersData[0])
 });

describe ('default properties', () => {


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

})
})