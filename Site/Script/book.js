const dateElement = document.getElementById("minDate");
let d = new Date();
console.log(d.getHours());
dateElement.setAttribute("min", d.toJSON().split('T')[0])
var div = document.getElementById('inputval');

function show(value) {
    if (value !== "loc0") {
    document.getElementById("form").style.display='initial';
    }
    else{
    document.getElementById("form").style.display='none';
    }
  }
