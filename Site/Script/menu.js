meny=["Booking", "Meny", "Våre restauranter"]
targetElement= document.querySelector("#menu");

for x in range(0,len(meny)){
    createMenu(x);
}
def createMenu(x){
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(meny))
  node.appendChild(p);

}
