menybar=["Booking", "Meny", "Våre restauranter"]
function addmenu(){
  targetElement= document.querySelector("#navbar");
<<<<<<< HEAD
  console.log(i)
=======
>>>>>>> 932eff6a3ffb7e430247c1d4839795f004e849cd
  const laga = document.createElement("a");
  laga.appendChild(document.createTextNode(menybar[i]));
  laga.setAttribute("class","meny")

  gilink(laga)
  targetElement.appendChild(laga);
}
function gilink(laga){
  if (i == 0){
    laga.setAttribute("href","./booking.html")
  }
  else if (i == 1){
    laga.setAttribute("href", "./meny.html")
  }
  else if (i == 2){
    laga.setAttribute("href", "./vare_restauranter.html")
  }

}
for (i in menybar){
    addmenu(i)
}
