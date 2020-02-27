import TravelInfo from '../src/travel-info.js';

class Travelers extends TravelInfo {
  constructor(tripsData, destinationsData, travelersData) {
    super(tripsData, destinationsData)
    this.travelersData = travelersData;
  }
}

export default Travelers;
