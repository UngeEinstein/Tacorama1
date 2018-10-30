menybar=["Booking", "Meny", "Våre restauranter"]

function addmenu(){
  targetElement= document.querySelector("#navbar");

  const laga = document.createElement("a");
  laga.appendChild(document.createTextNode(menybar[i]));
  laga.setAttribute("class","meny")
  for (i in menybar){
    if (i = 1)
      laga.setAttribute("href", "/booking.html")
    else if (i = 2)
      laga.setAttribute("href", "/meny.html")
    else if (i = 3)
      laga.setAttribute("href", "/vare_restauranter.html")
  }

  targetElement.appendChild(laga);
}
for (i in menybar){
    addmenu(i)
}
