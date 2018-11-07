let cart1 = [
  {name:"Taco Escobar", price:100,count:0},

];

let cart = {
    "Mexican Fiesta":{
    price:120,
    count:0,
  },
  "Fredagstaco":{
    price:99,
    count:0,
  },
  "Taco Escobar":{
    price:130,
    count:0,
  },
  "Super Nachos":{
    price:110,
    count:0,
  },
  "The Wall":{
    price:150,
    count:0,
  },
  "Filippos Fajitas":{
    price:149,
    count:0,
  },
}

// Defining shopping cart items
let Item = function(name,price,count) {
  this.name = name;
  this.price = price;
  this.count = count;
};

//adds item to Cart and
function addItemToCart(name, count){

  for (foodDish in cart) {
      if (foodDish === name) {
        cart[foodDish].count=count;
        console.log(cart[foodDish].count);
        displayCart(name);
        return;
        }
      }

      const item = new Item(name,price,count);
      console.log(name);

      displayCart(name);
      console.log("hfjdsfjkdsfdskj");
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



  for(foodDish in cartArray){
    let orderName= foodDish;
    let orderCount= cartArray[foodDish].count;
    let orderPrice= cartArray[foodDish].price;
    let getLiId=document.getElementById(foodDish);



    if (orderCount==1 && getLiId==null){

      let tekst=document.createTextNode(orderName);
      let textOrder=document.createTextNode(orderName);



      getList.appendChild(makeLi);
      makeLi.setAttribute('id',orderName);
      makeLi.innerHTML= orderCount + "x " + orderName;


    }

    else if ( orderCount==0 && getLiId!=null) {

      getList.removeChild(getLiId);

   }


    else if(orderCount>=1) {
      getLiId.innerHTML= orderCount + "x " + orderName;


    }


    totalPrice+= orderPrice*orderCount;
    document.getElementById("totalSum").innerHTML="Totalsum: " + totalPrice +",-kr";
    console.log(totalPrice);

  };
}



function confirmOrder(){
  checkItems = document.getElementById("orderList").childElementCount;
  if (checkItems>0){
  const customerName=document.getElementById("name").value;
  const customerNumber=document.getElementById("phoneNumber").value;
  const pickUpLocation=document.getElementById("pickUp").value;
  const pickUpHours=document.getElementById("pickUpTime").value;
  const getInputs = document.querySelectorAll(".orderInput");
  const getRevealButtons = document.querySelectorAll(".reveal");
  const getMinButtons = document.querySelectorAll(".minButton");
  const makeP = document.createElement('P')
  const personalInfo = document.getElementById('personalInfo');

  document.getElementById('orderForm').style.display="none";
  document.getElementById('personalInfo').style.backgroundColor=" #ffb594";


  personalInfo.appendChild(makeP);
  makeP.setAttribute("id","confirmationText");
  makeP.innerHTML="Din Bestilling er bekreftet!"+ "<br></br>"+ "Bestillingen er registrert på: " + "<br>" + customerName + "<br>" +
  "En bekreftelse er sendt til: "+ customerNumber + "<br>" +"Din mat hentes på: "+ pickUpLocation+" <br>" + "klokken: " + pickUpHours;

  //document.getElementById("orderText").innerHTML="Din Bestilling er bekreftet!"+ "<br></br>"+ "Din mat hentes på: "+ pickUpLocation+"<br>" + "klokken: " + pickUpHours;


//  document.getElementById("personalInfo").innerHTML=


  for (var i = 0; i < getRevealButtons.length; i++) {
    console.log(i);
    getRevealButtons[i].style.display="none";
    getInputs[i].style.display="none";
    getMinButtons[i].style.display="none";
  }
  document.getElementById("orderbtns").style.display="none";

}
else{
  alert("Vennligst velg en rett du vil bestille");
}

}

function revealNumber(parent, name){

  parent.childNodes[3].style.visibility="visible";
  parent.childNodes[5].style.visibility="visible";



  console.log(parent.childNodes)
 parent.childNodes[3].value++;
  addItemToCart(name, parent.childNodes[3].value);



}

function countDown (parent, name) {
  if(parent.childNodes[3].value>0)
 parent.childNodes[3].value--;
  addItemToCart(name, parent.childNodes[3].value);
}



// validate orderForm
document.getElementById("orderForm").addEventListener("submit",function(event){
  event.preventDefault();
  confirmOrder();
});


//
