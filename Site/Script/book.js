const inpDate = document.getElementById("minDate"); //setter dato til idag.
let d = new Date();
inpDate.setAttribute("min", d.toJSON().split('T')[0])
//forhindrer bruker fra å velge en dato som er før idag. fikk ikke til slik at det gjaldt for klokkeslett også.
const inpTime = document.getElementById("tid");

function setMinimum() {
    d = new Date();
    let today = //<-Variabel for streng med dato-formatet i dag.
        d.getFullYear() + "-"
        + (d.getMonth() < 9 ? "0" : "") +  (d.getMonth() + 1) + "-"
        + (d.getDate() < 10 ? "0" : "") + (d.getDate());

    console.log("let today =", today);
    console.log("min klokkeslett skal være nå: ", today === inpDate.value && d.getHours() >= 11)
    if (today === inpDate.value && d.getHours() >= 11) {
        inpTime.min = d.getHours() + ":" + d.getMinutes();
    } else {
        inpTime.min = "11:00";
    }
}



function show(value) { //funksjon til å åpne form når restaurant blir valgt
  if (value !== "") {
    document.getElementById("form-input").style.display = 'initial';

  } else {
    document.getElementById("form-input").style.display = 'none';
  }
}
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); //submitter form og forhindrer at siden skal refreshes
  display();
});


function display() { //Viser tekst som bekreftese
  document.getElementById("form").style.display = 'none';
  document.getElementById("booking_fjern").style.display = 'none';

  document.getElementById("book_res").innerHTML = "Bestillingen er fullført! Du har booket bord hos: " +
    "<br>" +
    document.getElementById("selectform").value + "&nbsp;" +
    document.getElementById("minDate").value + "&nbsp;" +
    document.getElementById("tid").value +
    "<br>" +
    "En e-post til:   " +
    document.getElementById("e-post").value +
    "   vil bli sendt som bekreftelse";
}
