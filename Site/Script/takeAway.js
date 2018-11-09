d = new Date();
const inpTime = document.getElementById("pickUpTime"); //kobler html element med de nye egenskapene
function checkTime(){
  if (d.getHours() >= 11) {
      inpTime.min = d.getHours() + ":" + d.getMinutes(); //ny minimum blir tredd inn hvis krav er innfridd
  } else {
      inpTime.min = "11:00";
  }
}

//Definerer de forskjellige rettene
let cart = {
    "Mexican Fiesta": {
        price: 120,
        count: 0,
    },
    "Fredagstaco": {
        price: 99,
        count: 0,
    },
    "Taco Escobar": {
        price: 130,
        count: 0,
    },
    "Super Nachos": {
        price: 110,
        count: 0,
    },
    "The Wall": {
        price: 150,
        count: 0,
    },
    "Filippos Fajitas": {
        price: 149,
        count: 0,
    },
}



// Itererer gjennom objektene og legger til count
function addItemToCart(name, count) {

    for (foodDish in cart) {
        if (foodDish === name) {
            cart[foodDish].count = count;
            displayCart(name);
            return;
        }
    }

}


//legger til rettene i listen som vises på skjermen
function displayCart(menuItem) {
    let totalPrice = 0;
    let cartList = cart;
    let makeLi = document.createElement("li");
    let getList = document.getElementById("orderList");



    for (foodDish in cartList) {
        let orderName = foodDish;
        let orderCount = cartList[foodDish].count;
        let orderPrice = cartList[foodDish].price;
        let getLiId = document.getElementById(foodDish);

        //Legger til element i handlekurven
        if (orderCount == 1 && getLiId == null) {
            let tekst = document.createTextNode(orderName);
            let textOrder = document.createTextNode(orderName);

            getList.appendChild(makeLi);
            makeLi.setAttribute('id', orderName);
            makeLi.innerHTML = orderCount + "x " + orderName;


        }
        //fjerner element fra kurven
        else if (orderCount == 0 && getLiId != null) {
            getList.removeChild(getLiId);

        }

        //endrer count på vare
        else if (orderCount >= 1) {
            getLiId.innerHTML = orderCount + "x " + orderName;

        }

        //Kalkulerer totalpris
        totalPrice += orderPrice * orderCount;
        document.getElementById("totalSum").innerHTML = "Totalsum: " + totalPrice + ",-kr";

    };
}


//Skriver ut og Bekrefter Bestilling, calles når bekreft
function confirmOrder() {
    checkItems = document.getElementById("orderList").childElementCount;
    if (checkItems > 0) { //sjekker at handlekurven ikke er tom
        const customerName = document.getElementById("name").value;
        const customerNumber = document.getElementById("phoneNumber").value;
        const pickUpLocation = document.getElementById("pickUp").value;
        const pickUpHours = document.getElementById("pickUpTime").value;
        const getInputs = document.querySelectorAll(".orderInput");
        const getRevealButtons = document.querySelectorAll(".reveal");
        const getMinButtons = document.querySelectorAll(".minButton");
        const makeP = document.createElement('P')
        const personalInfo = document.getElementById('personalInfo');



        // fjerner bestillingskjemaet og viser bekreftelsen
        document.getElementById('orderForm').style.display = "none";
        personalInfo.appendChild(makeP);
        makeP.setAttribute("id", "confirmationText");
        makeP.innerHTML = "Din Bestilling er bekreftet!" + "<br></br>" + "Bestillingen er registrert på: " + "<br>" + customerName + "<br>" +
            "En bekreftelse er sendt til: " + customerNumber + "<br>" + "Din mat hentes på: " + pickUpLocation + " <br>" + "klokken: " + pickUpHours;

        //fjerner bestillingsknapper
        for (var i = 0; i < getRevealButtons.length; i++) {
            getRevealButtons[i].style.display = "none";
            getInputs[i].style.display = "none";
            getMinButtons[i].style.display = "none";
        }
        document.getElementById("orderbtns").style.visibility = "hidden";

    } else {
        alert("Vennligst velg en rett du vil bestille");
    }

}
//Viser bestillings-count felt og minusknapp
function revealNumber(parent, name) {

    parent.childNodes[3].style.visibility = "visible";
    parent.childNodes[5].style.visibility = "visible";

    //Endrer verdi i inputFeltet og legger til i handlekurven
    parent.childNodes[3].value++;
    addItemToCart(name, parent.childNodes[3].value);



}
//Trekker fra count
function countDown(parent, name) {
    if (parent.childNodes[3].value > 0)
        parent.childNodes[3].value--;
    addItemToCart(name, parent.childNodes[3].value);
}



// validate orderForm
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    confirmOrder();
});
