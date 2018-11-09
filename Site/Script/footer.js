const footeren = `
<div class="footer">

  <div class="footer_info">
    <ul>
      <li>Solsiden 3b, 7048 Trondheim</li>
      <li>tacorama@post.no</li>
      <li>Tlf: 406 89 294</li>
    </ul>
  </div>

  <div class="footer_social">
    <ul>
      <li> <a href="http://facebook.com"> <img src="IMG/social_media/facebook_logo.png" alt="Facebook logo" style="width: 18px; height: 18px; padding-right: 7px;"> </a> </li>
      <li> <a href="http://twitter.com"> <img src="IMG/social_media/twitter_logo.png" alt="Twitter logo" style="width: 18px; height: 18px; padding-right: 7px;"> </a> </li>
      <li> <a href="http://instagram.com"> <img src="IMG/social_media/instagram_logo.png" alt="Instagram logo" style="width: 18px; height: 18px;"> </a> </li>
      <li> &copy; 2018 Tacorama.no</li>
    </ul>
  </div>

</div>`

// lager en funksjon som fyller HTML (footeren vår) inni en div. 
function addfooter() {
  const targetElement = document.querySelector("#footer_div");
  targetElement.innerHTML = footeren;
}
addfooter()
