

let tasks=[];
let outputTeller=1;

//Funksjon som teller antall oppgaver og hvor mange checkbokser som er checked
function checkedCounter() {
  let TaskCounter = tasks.length;
  let checkboxes_checked=(document.querySelectorAll('input[type="checkbox"]:checked').length);
  document.getElementById("output").innerHTML="You have completed "+ checkboxes_checked + "/" + TaskCounter + " task(s)";

}


function addTask() {

  let date= new Date()
  let hentInput=document.getElementById('doInput').value;
  let lagLi=document.createElement("li");
  let tekst=document.createTextNode(hentInput);
  let hentListe=document.getElementById("doList");
  let counter= 0; // brukes i crossout funksjonen

  //lager checkbox
  let checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.addEventListener("click",crossout);



      //Funksjon som krysser ut tekstlinjene når de blir checket
  function  crossout() {
        counter++;

        if (counter%2==1) {
            lagLi.style.textDecoration="line-through";
          } else {
            lagLi.style.textDecoration="none";
          }

        checkedCounter();
        }



      //appender teksten i inputfeltet og en checkbox til et li element:
      if(hentInput=="" || hentInput== " ") {
        alert("You have to write a task you wish to complete!")
      }
      else {
        hentListe.appendChild(lagLi);
        lagLi.appendChild(checkBox);
        lagLi.appendChild(tekst);
        tasks.push(hentInput + " " + date.getTime());
      }
      //setter inn det nye elementet først i listen
        hentListe.insertBefore(lagLi, hentListe.childNodes[0]);

      //legger til inputen og timestamp i en array som vises i konsollen

        console.log(tasks);
        checkedCounter();
        document.getElementById("doInput").value="";

}
