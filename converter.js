function toCelsius () {
    var TempNum = document.getElementById("number").value;
    var celsiusTemp = (TempNum-32)*5/9;
    if (celsiusTemp >= 32) {
      document.getElementById("converted-temp").style.color = "red";
    }else if(celsiusTemp <= 0){
      document.getElementById("converted-temp").style.color = "blue";
    }else if(celsiusTemp < 32 && celsiusTemp > 0){
      document.getElementById("converted-temp").style.color = "green";
    }
    
    return celsiusTemp;
    
}



function toFahrenheit () {
  var TempNum = document.getElementById("number").value;
  var fahrenheitTemp = TempNum*9/5+32;
  if (fahrenheitTemp >= 90) {
    document.getElementById("converted-temp").style.color = "red";
  }else if(fahrenheitTemp <= 32){
    document.getElementById("converted-temp").style.color = "blue";
  }else if(fahrenheitTemp < 90 && fahrenheitTemp > 32){
    document.getElementById("converted-temp").style.color = "green";
  }
  return fahrenheitTemp;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var clear = document.getElementById("clear");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {

  var convertCelsius = document.getElementById("celsiusdeg").checked;
  var convertFahrenheit = document.getElementById("fahrenheitdeg").checked;
  
  if (convertCelsius === true) {
    document.getElementById("converted-temp").innerHTML = toCelsius();
  } else if (convertFahrenheit === true) {
    document.getElementById("converted-temp").innerHTML = toFahrenheit();
  }

}

function clearInput () {
  document.getElementById("number").value = "";
  document.getElementById("celsiusdeg").checked = false;
  document.getElementById("fahrenheitdeg").checked = false;
  document.getElementById("converted-temp").innerHTML = "";
}



// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
clear.addEventListener("click", clearInput);

function inputKeyUp(e) {
  e.which = e.which || e.keyCode;
  if(e.which == 13) {
      determineConverter();
  }
}

