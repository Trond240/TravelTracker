import TravelInfo from '../src/travel-info.js';

class Travelers extends TravelInfo {
  constructor(tripsData, destinationsData, travelersData) {
    super(tripsData, destinationsData)
    this.travelersData = travelersData;
  }

  getUsersTotatlSpent(userID) {
    let foundTrips = this.getDistinationName(userID);

      return foundTrips.reduce((counter, trips) => {
      counter += trips['Flight Per Person'] * trips['Number of Travelers'];
      counter += trips['Cost Per Person A Day'] * trips['Number of Travelers'];
      return counter
    }, 0)
  }
}

export default Travelers;
