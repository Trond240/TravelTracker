import $ from 'jquery';

export const domUpdates = {
 displayUserInformation(name, totalAmount) {
   console.log(name)
   $('.users-name-display').text(`Hello! ${name}!`)
   $('.users-total-display').text(`Total Amount Spent: $${totalAmount}.00`)
 },

 // displayManagerInfo(roomsAvailable, moneyMade, percentOccupied) {
 //   $('.total-rooms').text(`Total Rooms Available: ${roomsAvailable}!`)
 //   $('.total-revenue').text(`total Revenue for Today's Date: ${moneyMade}`)
 //   $('.percent-available').text(`Percentage of Rooms Occupied: ${percentOccupied}`)
 // },

 displayUsersPastAndPresent(travelHistory) {
   return travelHistory.forEach(trip => {
     $('.past-and-present').append(
       `<div class='all-trips'>
         <p>Destination: ${trip.destination}</p>
         <p>Flight Cost Per Person: ${trip.estimatedFlightCostPerPerson}</p>
         <p>Estimated Cost For Lodge: ${trip.stimatedLodgingCostPerDay}</p>
         <p>Number of Travelers: ${trip.travelers}</p>
         <p>Date: ${trip.date}</p>
       </div>
       `)
   })
 },

 displayAllTrips(tripsData) {
   return tripsData.forEach(trip => {
     $('.trips').append(
       `<div class='vacation-card'>
       <h1>Destination:${trip.destination}</h1>
       <image src='${trip.image}' alt='click to view recipe for ${trip.alt}'>
       <p>Estimated Cost Per Day: $${trip.estimatedLodgingCostPerDay}.00</p>
       <p>Estimated Flight Cost Per Person: $${trip.estimatedFlightCostPerPerson}.00</p>
       </div>
       ` )
   })
 }
}

export default domUpdates;
