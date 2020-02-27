import TravelInfo from '../src/travel-info.js';

class TravelAgent extends TravelInfo {
  constructor(tripsData, destinationsData, travelersData) {
    super(tripsData, destinationsData)
    this.travelersData = travelersData;
  }
}

export default TravelAgent;
