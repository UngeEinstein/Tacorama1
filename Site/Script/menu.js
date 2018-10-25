meny=["Booking", "Meny", "Våre restauranter"]
targetElement= document.querySelector("#menu");
for x in meny{
    createMenu(x);
}
def createMenu(x){
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(meny))
  node.appendChild(li);

}
