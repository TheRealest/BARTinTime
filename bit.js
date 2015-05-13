$(document).ready(function() {

// initializing function
var init = function() {
  stopsList();
  directionsList();
}

// write all stops to the dropdown menu for start
var stopsList = function() {
  // get list of stops
  // sort into alphabetical order
  // append <option> </option> onto id="start"
}


// write directions to the dropdown menu for direction
var directionsList = function() {
  // get list of directions
  // sort into alphabetical order
  // append <option> </option> onto id="end" <- maybe change id name????
}

// get the current stop
var startStop = function() {
  return $("#start").text();
}

// get the direction
var direction = function() {
  return $("#end").text(); //change the class of end??
}

// get the time until the bart arrives
var timeToArrival = function(start, direction) {

}

// function to get the soonest arrival
var soonestArrival = function() {
  // get list of arrivals
  // sort by timeToArrival
  // return the first one in the list after sorting
}

// function to sort the information by TIME



// append onto the html with class="lines"
var appendToLines = function(line) {
  $(".lines").append(line);
}

// append onto the html with class="time"
var appendToTime = function(time) {
  $(".time").append(line);
}

// updates the icon badge with the time and specified color
var updateBadge = function(time) {
  chrome.browserAction.setBadgeText({
    text: time.toString()
  });
  chrome.browserAction.setBadgeBackgroundColor({
    color: "#287C9E"
  });
}

// needs something to listen for changes in the dropdown menu
// needs something to listen for changes in the time...or updates in a setInterval



init();

});
