const menybar = `
<a class="meny" href="./index.html">
  <img id="logo" src="./IMG/Logo/Logo.png" alt="Logo">
</a>
<a class="meny" href=./booking.html>Booking</a>
<a class="meny" href=./meny.html>Meny</a>
<a class="meny" href=./vare_restauranter.html>Våre restauranter</a>
  <iframe width="0" height="0" src="https://www.youtube.com/embed/N_x72hA7_SY?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `

function addmenu() {
  const targetElement = document.querySelector("#navbar");
  targetElement.innerHTML = menybar;
}
addmenu()
