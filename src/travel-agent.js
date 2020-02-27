import TravelInfo from '../src/travel-info.js';

class TravelAgent extends TravelInfo {
  constructor(tripsData, destinationsData, travelersData) {
    super(tripsData, destinationsData)
    this.travelersData = travelersData;
  }

  totalUsersOnTripsToday(date) {
    return this.tripsData.reduce((counter, trips) =>  {
      if(trips.date === date) {
        counter += trips.travelers;
      }
      return counter
    }, 0)
  }

  retrievePendingTrips() {
    return this.tripsData.filter(trip => {
      return trip.status === 'pending';
    })
  }
}

export default TravelAgent;
