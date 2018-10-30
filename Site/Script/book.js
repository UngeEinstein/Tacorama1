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
function display() {
  DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200,list-style=none,')
  message = "<ul><li><b>Navn: </b>" + document.getElementById("Navn").value;
  message += "<li><b>Etternavn: </b>" + document.getElementById("Enavn").value;
  message += "<li><b>E-post: </b>" + document.getElementById("e-post").value;
  message += "<li><b>Telefon: </b>" + document.getElementById("tlf").value;
  message += "<li><b>Dato: </b>" + document.getElementById("minDate").value;
  message += "<li><b>Tid: </b>" + document.getElementById("tid").value + "</ul>";
  DispWin.document.write(message);
}
