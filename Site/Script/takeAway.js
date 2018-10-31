let cart = [];

// Defining shopping cart items
let Item = function(name,price,count) {
  this.name = name;
  this.price = price;
  this.count = count;
};

//adds item to Cart and
function addItemToCart(name, price,count){

  for (i in cart) {
      if (cart[i].name === name) {
        cart[i].count=count;
        console.log(count);
        displayCart(name);
        return;
        }
      }

      const item = new Item(name,price,count);
      cart.push(item);
      displayCart(name);

      console.log(cart);


}





function removeItemFromCart(name){
  for (i in cart) {
    if (cart[i].name === name){
      cart[i].count-=1;
      if(cart[i].count===0){
        cart.splice(i,1)
      }
      break;
    }
  }
}




function displayCart(menuItem) {
  let totalPrice=0;
  let cartArray = cart;
  let makeLi=document.createElement("li");
  let getList=document.getElementById("orderList");



  for(i in cartArray){
    let orderName= cartArray[i].name;
    let orderCount= cartArray[i].count;
    let orderPrice= cartArray[i].price;
    let getLiId=document.getElementById(cartArray[i].name);


    if (orderName==menuItem && getLiId==null && orderCount>0){

      let tekst=document.createTextNode(orderName);
      let textOrder=document.createTextNode(orderName);



      getList.appendChild(makeLi);
      makeLi.setAttribute('id',orderName);
      makeLi.innerHTML= orderCount + "x " + orderName;


    }

    else if ( orderCount==0 && getLiId!=null) {

      getList.removeChild(getLiId);

      console.log(cartArray[i]);
      cartArray.splice(i,1);
      console.log("yomdasjdas");
      console.log(cartArray[i]);

   }


    else if(orderCount>=1) {
      getLiId.innerHTML= orderCount + "x " + orderName;


    }

    if(orderCount>0){
    totalPrice+= orderPrice*orderCount;
    document.getElementById("totalSum").innerHTML="Totalsum: " + totalPrice +",-kr";
    console.log(totalPrice);

  };
}
}


function confirmOrder(){
  const customerName=document.getElementById("name").value;
  const customerNumber=document.getElementById("phoneNumber").value;
  const pickUpLocation=document.getElementById("pickUp").value;
  const pickUpHours=document.getElementById("pickUpTime").value;

  document.getElementById("personalInfo").innerHTML= "Din Bestilling er bekreftet!"+ "<br></br>"+ "Din mat hentes på: "+ pickUpLocation+"<br>" + "klokken: " + pickUpHours;
  const getInputs = document.querySelectorAll(".orderInput");
  console.log(getInputs.length);
  for (var i = 0; i < getInputs.length; i++) {
    console.log(i);
    getInputs[i].style.display="none";
  }



}

//
