const dateElement = document.getElementById("minDate"); //setter dato til idag.
let d = new Date();
console.log(d.getHours());
dateElement.setAttribute("min", d.toJSON().split('T')[0])
var div = document.getElementById('inputval');


function display(value) {
  if (value=='') {
      return document.getElementById('form').style.display = 'none';
    }
  else {
      return document.getElementById('form').style.display = 'block';
    }
    confirmOrder();
  }
function confirmOrder() {
  const technologies = [
    document.getElementById("Navn").value,
    document.getElementById("Enavn").value,
    document.getElementById("e-post").value,
    document.getElementById("tlf").value,
    document.getElementById("minDate").value,
    document.getElementById("tid").value,
];
var tech = document.getElementById("tech");
for (let i = 0; i < technologies.length; i++){
  console.log(technologies[i]);
  let li = document.createElement ("LI");
  let text = document.createTextNode(technologies[i]);
  li.appendChild(text);
  tech.appendChild(li);
}
}
