
var formatTime = function(date) {
  var hours, minutes, seconds;
  
  //HOURS
  hours = date.getHours();
  //convert to 12 hour format
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  //add 0 for single digits
  if (hours < 10) {
    hours = "0" + hours;
  }
  //MINUTES
  minutes = date.getMinutes();
  //add 0 for single digits  
   if (minutes < 10) {
    minutes = "0" + minutes;
  }
  //SECONDS
  seconds = date.getSeconds();
  //add 0 for single digits
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  //return array of hours, minutes, seconds, joined
  return [hours, minutes, seconds].join(":");
};

//jQuery
$(function(){
  var showDate = function() {
  //set variable, call formatTime function
  var clockText = formatTime (new Date());
    //set text element to clocktext
    $(".clock").text(clockText);
  }
  //setInterval to show date
  setInterval(showDate, 1000);
});


