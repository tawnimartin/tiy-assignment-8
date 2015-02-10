
var formatTime = function(date) {
  var hours, minutes, seconds, hex;
  
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
  //return hex as array - need array format for rgb conversion
  return hex = [hours, minutes, seconds];
};

//function to convert hex to rgb
var convertHex = function(hex) {
  //convert hex values to rgb
  var r = parseInt(hex[0], 16);
  var g = parseInt(hex[1], 16);
  var b = parseInt(hex[2], 16);
  //build string for css
  var rgbString = "rgb(" + r + "," + g + "," + b + ")"
  //return string
  return rgbString;
}

//jQuery
$(function(){
  var showHex = function() {
  //run format time function to get values for use in hex and rgb
  var hex = formatTime (new Date());  
  //add hash for text output
  var hexWithHash = "#" + hex.join("");
  //convert hex to rbg for css
  var hexToRgb = convertHex(hex);
  //set CSS values
  $(".main-container").css("background-color", hexToRgb);
  $(".hex").text(hexWithHash);
  }
  //set Interval
  setInterval(showHex, 1000);
});


