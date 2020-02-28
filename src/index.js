import './css/base.scss';
import $ from 'jquery';
import {domUpdates} from '../src/domUpdates.js'
import TravelInfo from '../src/travel-info.js';
import TravelAgent from '../src/travel-agent';
import Travelers from '../src/travelers';


let travelInfo;
let travelers;
let travelAgent;
let tripsData;
let destinationsData;
let travelersData;


const travelerData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers')
  .then(travelersResponse => travelersResponse.json())
  .then(data => data.travelers)
  .catch(error => console.log('usersData error'));

const destinationData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/destinations/destinations')
  .then(destinationsResponse => destinationsResponse.json())
  .then(data => data.destinations)
  .catch(error => console.log('roomsData error'));

const tripData = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips')
  .then(tripsResponse => tripsResponse.json())
  .then(data => data.trips)
  .catch(error => console.log('bookingsData error'));

Promise.all([tripData, destinationData, travelerData])
  .then(data => {
    tripsData = data[0];
    destinationsData = data[1];
    travelersData = data[2];
  })
  .then(() => {
    travelInfo = new TravelInfo(tripsData, destinationsData);
    console.log(travelInfo)

  })
  .catch(error => {console.log('Something is amiss with promise all', error)});


  const generateUser = () => {
  if($('.user-input').val() === 'agency') {
    travelAgent = new TravelAgent(tripsData, destinationsData, travelersData);
    console.log('agent', travelAgent);
    travelAgentHandler();
    // $('.error-message').hide();
  } else {
    const loginInput = parseInt($('.user-name').val().split('traveler')[1]);
    const travelerInformation = travelersData.find(traveler => traveler.id === loginInput)
    travelers = new Travelers(tripsData, destinationsData, loginInput, travelerInformation.name);
    travelerHandler();
    // $('.error-message').hide();
}
}

const checkPassword = (event) => {
  event.preventDefault();
  if($(".user-name").val() &&
  $(".user-password").val() === 'travel2020') {
    generateUser();
  } else {
    displayError();
  }
}

const travelerHandler = () => {
  $('.welcome').addClass('hidden');
  $('.user-page').removeClass('hidden');
  domUpdates.displayUserInformation(travelers.name, travelers.getUsersTotatlSpent(travelers.travelersData))
  domUpdates.displayAllTrips(travelInfo.destinationsData)
  domUpdates.displayUsersPastAndPresent(travelers.getDistinationName(travelers.travelersData))
}

const travelAgentHandler = () => {
  console.log('made-it')
  $('.welcome').addClass('hidden');
    $('.manager-page').removeClass('hidden');
}

const displayError = () => {
  $('.error-message').remove('.hidden')
}


$('.login-button').click(checkPassword);
