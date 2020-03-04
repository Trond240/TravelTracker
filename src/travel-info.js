class TravelInfo {
  constructor(tripsData, destinationsData) {
    this.tripsData = tripsData;
    this.destinationsData = destinationsData;
  }

  getTravelersInformation(userID) {
    return this.tripsData.reduce((tripsList, trips) => {
      if(userID === trips.userID) {
        tripsList.push({destination: trips.destinationID, travelers: trips.travelers, date: trips.date, duration: trips.duration, status: trips.status})
      }
      return tripsList
    }, [])
  }

  getDistinationName(userID) {
    let findDestinationName = this.getTravelersInformation(userID);
    return findDestinationName.reduce((newList, trip) => {
      this.destinationsData.forEach(destination => {
        if(trip.destination === destination.id) {
          newList.push({destination: destination.destination, flightPerPerson: destination.estimatedFlightCostPerPerson, costPerPersonADay: destination.estimatedLodgingCostPerDay, numberOfTravelers: trip.travelers, date: trip.date, duration: trip.duration, status: trip.status})
        }
      })
      return newList;
    }, [])
  }

}

export default TravelInfo;
