const dateElement = document.getElementById("minDate"); //setter dato til idag.
 let d = new Date();
 console.log(d.getHours());
 dateElement.setAttribute("min", d.toJSON().split('T')[0])
 var div = document.getElementById('inputval');

 function show(value) { //funksjon til å åpne form når restaurant blir valgt
   if (value !== "loc0") {
     document.getElementById("form").style.display = 'initial';
   } else {
     document.getElementById("form").style.display = 'none';
  }
}
function display() {

  var newLine = "\r\n"
  message = "         Bestillingen er fullført!    ";
  message += newLine;
  message += "Navn:  " + document.getElementById("Navn").value;
  message += newLine;
  message += "Etternavn:  " + document.getElementById("Enavn").value;
  message += newLine;
  message += "E-post:  " + document.getElementById("e-post").value;
  message += newLine;
  message += "Telefon:  " + document.getElementById("tlf").value;
  message += newLine;
  message += "Dato:  " + document.getElementById("minDate").value;
  message += newLine;
  message += "Tid:  " + document.getElementById("tid").value;
  alert(message);
}
