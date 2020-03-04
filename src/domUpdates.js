import $ from 'jquery';

export const domUpdates = {
 displayUserInformation(name, totalAmount) {
   console.log(name)
   $('.users-name-display').text(`Hello! ${name}!`)
   $('.users-total-display').text(`Total Amount Spent: $${totalAmount}.00`)
 },

 displayManagerInfo(tripsData, numberOnTrips, totalAmount) {
   $('.agent-name-display').text(`Welcome back: Trond Makonese!`)
   $('.all-total-display').text(`Total Revenue This Year: $${numberOnTrips}`)
   $('.users-on-trips-today').text(`Number of Travelers on Trips Today: ${totalAmount}`)
 },

 displayUsersPastAndPresent(travelHistory) {
   travelHistory.map(trip => {
     $('.past-and-present').append(
       `<div class='all-trips'>
         <p>Destination: ${trip.destination}</p>
         <p>Flight Cost Per Person: $${trip.flightPerPerson}.00</p>
         <p>Estimated Cost For Lodge: $${trip.costPerPersonADay}.00</p>
         <p>Number of Travelers: ${trip.numberOfTravelers}</p>
         <p>Date: ${trip.date}</p>
       </div>
       `)
   })
 },

 displayUserTripInfo(foundInfo) {
   foundInfo.map(trip => {
     $('.user-pending-trips').append(
       `<div class='users-trips'>
         <p>User: ${trip.name}</p>
         <p>Trip Date: ${trip.tripDate}</p>
         <p>Trip Status: ${trip.status}</p>
         <button id='${trip.tripID}'>Approve Trip</button>
         <button id='${trip.tripID}'>Denny Trip</button>
       </div>
       `)
   })
 },

 displayManagerTrips(tripsData) {
   tripsData.map(trip => {
     $('.manager-trips').append(
       `<div class='vacation-card'>
       <h1>Destination:${trip.destination}</h1>
       <image class='destination-image' src='${trip.image}' alt='click to view recipe for ${trip.alt}'>
       <p>Estimated Cost Per Day: $${trip.estimatedLodgingCostPerDay}.00</p>
       <p>Estimated Flight Cost Per Person: $${trip.estimatedFlightCostPerPerson}.00</p>
       </div>
       ` )
   })
 },

 displayAllTrips(tripsData) {
      tripsData.map(trip => {
        $('.trips').append(
       `<div class='vacation-card'>
       <h1>Destination:${trip.destination}</h1>
       <image class='destination-image' src='${trip.image}' alt='click to view recipe for ${trip.alt}'>
       <p>Estimated Cost Per Day: $${trip.estimatedLodgingCostPerDay}.00</p>
       <p>Estimated Flight Cost Per Person: $${trip.estimatedFlightCostPerPerson}.00</p>
       </div>
       ` )
   })
 },

 displaySingleTripInfo(trip) {
     $('.trip-info').append(
    `<div class='view-vacation-card'>
    <h1>Destination:${trip.destination}</h1>
    <image class='destination-image' src='${trip.image}' alt='click to view recipe for ${trip.alt}'>
    <p>Estimated Cost Per Day: $${trip.estimatedLodgingCostPerDay}.00</p>
    <p>Estimated Flight Cost Per Person: $${trip.estimatedFlightCostPerPerson}.00</p>
    </div>
    ` )
},

totalCostDisplay(totalAmount) {
  $('.agency-fee').text(`Travel Total: $${totalAmount}.00`);
  // $('.travel-fee').text(`Agency Fee: ${agentFee}.00`);
}

}

export default domUpdates;
