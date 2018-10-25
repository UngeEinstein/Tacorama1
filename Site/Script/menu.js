meny=["Booking", "Meny", "Våre restauranter"]

function addmenu(){
  targetElement= document.querySelector("#menu");

  const lagli = document.createElement("li");
  lagli.appendChild(document.createTextNode(meny[i]));
  lagli.setAttribute("id",meny[i]);
  lagli.setAttribute("class","meny")
  targetElement.appendChild(lagli);
}
for (i in meny){
    addmenu(i)
}
