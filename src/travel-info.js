class TravelInfo {
  constructor(tripsData, destinationsData) {
    this.tripsData = tripsData;
    this.destinationsData = destinationsData;
  }

  getTotatlSpent(userID) {

  }

  getTravelersInformation(userID) {
    return this.tripsData.reduce((tripsList, trips) => {
      if(userID === trips.userID && trips.status === 'approved') {
        tripsList.push({destination: trips.destinationID, travelers: trips.travelers, date: trips.date})
      }
      return tripsList
    }, [])
  }

  getDistinationName(userID) {
    let findDestinationName = this.getTravelersInformation(userID);
    return findDestinationName.reduce((newList, trip) => {
      this.destinationsData.forEach(destination => {
        if(trip.destination === destination.id) {
          newList.push({destination: destination.destination, 'Number of Travelers': trip.travelers, date: trip.date})
        }
      })
      return newList;
    }, [])
  }

}

export default TravelInfo;
