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

  totalRevenueThisYear() {
    //need to pass in a date
    let totalCount = this.getAllUserTotalSpent();
    return totalCount * .01
    // return this.tripsData.
  }

  getAllUserTotalSpent() {

    return this.tripsData.reduce((counter, trip) => {
      this.destinationsData.forEach(destination => {
        if(trip.destinationID === destination.id) {
          counter += destination.estimatedLodgingCostPerDay * trip.duration
          counter += destination.estimatedFlightCostPerPerson * trip.travelers
        }
      })
      return counter
    }, 0)
  }
}

export default TravelAgent;
