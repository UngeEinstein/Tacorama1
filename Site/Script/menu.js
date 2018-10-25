meny=["Booking", "Meny", "Våre restauranter"]

function addmenu(){
  targetElement= document.querySelector("#menu");

  const lagli = document.createElement("li");
  lagli.appendChild(document.createTextNode(meny[i]));
  targetElement.appendChild(lagli);
}
for (i in meny){
    addmenu(i)
}
