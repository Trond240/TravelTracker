import TravelInfo from '../src/travel-info.js';

class Travelers extends TravelInfo {
  constructor(tripsData, destinationsData, travelersData, name) {
    super(tripsData, destinationsData)
    this.travelersData = travelersData;
    this.name = name;
  }

  searchDistinationByName(destinationName) {
    let foundDestination = this.destinationsData.find(destination => {
      return destination.destination === destinationName;
    })

    return foundDestination;
  }

  getUsersTotatlSpent(userID) {
    let foundTrips = this.getDistinationName(userID);

      let totalSpent = foundTrips.reduce((counter, trips) => {
      counter += trips.flightPerPerson * trips.numberOfTravelers;
      counter += trips.costPerPersonADay * trips.duration;
      return counter;
    }, 0)

    return totalSpent;
  }

  getAgencyFee(newTrip) {
    let foundTripTotal = this.getSingleTripTotal(newTrip);

    return (foundTripTotal * .10);
  }

  getSingleTripTotal(newTrip) {
    let foundTrip = this.findTripInfo(newTrip);

    let tripTotal = this.destinationsData.reduce((math, destination) => {
      if(foundTrip.destinationID === destination.id) {
        console.log(destination)
          math += destination.estimatedLodgingCostPerDay * foundTrip.travelers;
          math += destination.estimatedFlightCostPerPerson * foundTrip.duration;
      }
      return math
    }, 0)
    return tripTotal;
  }

  findTripInfo(newTrip) {
    let foundTrip = this.tripsData.find(trip => {
      return trip.id === newTrip.id
    })

    return foundTrip;
  }

  bookNewTrip(id, userID, destinationID, travelers, date, duration, status, suggestedActivities) {
    fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips', {
      method: 'POST',
      headers: {
      "Content-Type": "application/json"
    },

      body: JSON.stringify({
      id: id,
      userID: userID,
      destinationID: destinationID,
      travelers: travelers,
      date: date,
      duration: duration,
      status: status,
      suggestedActivities: suggestedActivities}),
  })

      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log('error, someting went wrong'))
  }
}

export default Travelers;
