class TravelInfo {
  constructor(tripsData, destinationsData) {
    this.tripsData = tripsData;
    this.destinationsData = destinationsData;
  }

  getTravelersInformation(userID) {
    return this.tripsData.reduce((tripsList, trips) => {
      if(userID === trips.userID && trips.status === 'approved') {
        tripsList.push({destination: trips.destinationID, 'Number of Travelers': trips.travelers, date: trips.date})
      }
      return tripsList
    }, [])
  }

  getTotatlSpent(userID) {

  }
}

export default TravelInfo;
