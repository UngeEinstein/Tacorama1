const dateElement = document.getElementById("minDate"); //setter dato til idag.
let d = new Date();
console.log(d.getHours());
dateElement.setAttribute("min", d.toJSON().split('T')[0])
var div = document.getElementById('inputval');

function show(value) { //funksjon til å åpne form når restaurant blir valgt
    if (value !== "loc0") {
    document.getElementById("form").style.display='initial';
    }
    else{
    document.getElementById("form").style.display='none';
    }
  }
  function myFunction() {
    document.getElementById("submit").submit();
}
