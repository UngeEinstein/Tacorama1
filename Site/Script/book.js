const dateElement = document.getElementById("minDate"); //setter dato til idag.
 let d = new Date();
 console.log(d.getHours());
 dateElement.setAttribute("min", d.toJSON().split('T')[0])
 var div = document.getElementById('inputval');

 function show(value) { //funksjon til å åpne form når restaurant blir valgt
   if (value !== "") {
     document.getElementById("form-input").style.display = 'initial';

   } else {
     document.getElementById("form-input").style.display = 'none';
  }
}
document.getElementById("form").addEventListener("submit",function(event){
  event.preventDefault();
  display();
});


function display() {
  document.getElementById("form").style.display = 'none';
  document.getElementById("booking_fjern").style.display = 'none';

document.getElementById("book_res").innerHTML= "Bestillingen er fullført! Du har booket bord hos: "
  + "<br>"
  + document.getElementById("selectform").value + "&nbsp;"
  + document.getElementById("minDate").value + "&nbsp;"
  + document.getElementById("tid").value
  + "<br>"
  + "En e-post til:   "
  + document.getElementById("e-post").value
  + "   vil bli sendt som bekreftelse";
}
