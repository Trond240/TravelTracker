import TravelInfo from '../src/travel-info.js';

class TravelAgent extends TravelInfo {
  constructor(tripsData, destinationsData, travelersData) {
    super(tripsData, destinationsData)
    this.travelersData = travelersData;
  }

  searchUserByNameHelper(name) {
    let foundUser = this.travelersData.find(user => {
      return user.name === name;
    })
    return foundUser
  }

  getUserTripInformation(name) {
    let helper = this.searchUserByNameHelper(name);

    let foundTripInfo = this.tripsData.filter(trip => {
      return trip.userID === helper.id && trip.status === 'pending';
    })

    return foundTripInfo.map(trip => {
      return ({name: helper.name, tripID: trip.id, tripDate: trip.date, status: trip.status})
    })
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
      console.log(trip)
      return trip.status === 'pending';
    })
  }

  totalRevenueThisYear() {
    //need to pass in a date
    let totalCount = this.getAllUserTotalSpent();
    return totalCount * .01
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

  approveRequest(tripID, tripStatus) {

    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/updateTrip', {
      method: 'POST',
      headers: {
      "Content-Type": "application/json"
    },

      body: JSON.stringify({
        id: 92829,
        status: "approved"
      })

      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log('error, someting went wrong'))
    })
}


  denleteTrip(destinationID) {
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips', {
      method: 'POST',
      headers: {
      "Content-Type": "application/json"
    },

      body: JSON.stringify({
         id: 92829
      })

      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log('error, someting went wrong'))
    })
  }
}

export default TravelAgent;
