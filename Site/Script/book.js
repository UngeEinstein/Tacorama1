const dateElement = document.getElementById("minDate");
let d = new Date();
console.log(d.getHours());
dateElement.setAttribute("min", d.toJSON().split('T')[0])
