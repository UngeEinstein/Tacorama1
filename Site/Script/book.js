const dateElement = document.getElementById("minDate"); //setter dato til idag.
let d = new Date();
console.log(d.getHours());
dateElement.setAttribute("min", d.toJSON().split('T')[0])
var div = document.getElementById('inputval');
let SubmitCheck=0;

function confirmOrder() {
  console.log("yo");
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
  let li = document.createElement ("li");
  let text = document.createTextNode(technologies[i]);
  li.appendChild(text);
  tech.appendChild(li);
}
}



function display(value) {
  if (value=='') {
      return document.getElementById('form').style.display = 'none';
      for (i=0;i<150;i++){
        console.log(i);
      }

    }
  else {
      return document.getElementById('form').style.display = 'block';
    }


  }

  if (SubmitCheck==1){
    console.log("yo");
  }
