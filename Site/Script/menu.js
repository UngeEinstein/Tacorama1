meny=["Booking", "Meny", "Våre restauranter"]

function addmenu(){
  targetElement= document.querySelector("#menu");

  const lagli = document.createElement("li");
  lagli.appendChild(document.createTextNode(meny[i]));
  lagli.setAttribute("class","meny")
  for (i in meny){
    if (i = 1)
      lagli.setAttribute("href", "/booking.html")
    else if (i = 2)
      lagli.setAttribute("href", "/meny.html")
    else if (i = 3)
      lagli.setAttribute("href", "/vare_restauranter.html")
  }

  targetElement.appendChild(lagli);
}
for (i in meny){
    addmenu(i)
}
