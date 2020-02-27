class TravelInfo {
  constructor(tripsData, destinationsData) {
    this.tripsData = tripsData;
    this.destinationsData = destinationsData;
  }

  getTravelersInformation(userID) {
    return this.tripsData.reduce((tripsList, trips) => {
      console.log(trips)
      if(userID === trips.userID) {
        tripsList.push({destination: trips.destinationID, travelers: trips.travelers, date: trips.date, duration: trips.duration})
      }
      return tripsList
    }, [])
  }

  getDistinationName(userID) {
    let findDestinationName = this.getTravelersInformation(userID);
    return findDestinationName.reduce((newList, trip) => {
      this.destinationsData.forEach(destination => {
        if(trip.destination === destination.id) {
          newList.push({destination: destination.destination, 'Flight Per Person': destination.estimatedFlightCostPerPerson, 'Cost Per Person A Day': destination.estimatedLodgingCostPerDay, 'Number of Travelers': trip.travelers, date: trip.date, "Duration": trip.duration})
        }
      })
      return newList;
    }, [])
  }

}

export default TravelInfo;
