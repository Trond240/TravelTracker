import TravelInfo from '../src/travel-info.js';

class Travelers extends TravelInfo {
  constructor(tripsData, destinationsData, travelersData, name) {
    super(tripsData, destinationsData)
    this.travelersData = travelersData;
    this.name = name;
  }

  getUsersTotatlSpent(userID) {
    let foundTrips = this.getDistinationName(userID);
    console.log(foundTrips)

      return foundTrips.reduce((counter, trips) => {
      counter += trips.flightPerPerson * trips.numberOfTravelers;
      counter += trips.costPerPersonADay * trips.duration;
      return counter;
    }, 0)
  }
}

export default Travelers;
