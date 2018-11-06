const menybar = `
<a class="meny" href="./index.html">
  <img id="logo" src="./IMG/Logo/Logo.png" alt="Logo">
</a>
<a class="meny" href=./booking.html>Booking</a>
<a class="meny" href=./meny.html>Meny</a>
<a class="meny" href=./vare_restauranter.html>Våre restauranter</a>
  `

function addmenu() {
  const targetElement = document.querySelector("#navbar");
  targetElement.innerHTML = menybar;
}
addmenu()
