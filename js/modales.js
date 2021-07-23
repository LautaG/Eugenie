function modalContacto() {
  var element = document.getElementById("modal");
  element.classList.add("is-active");
  var element = document.getElementById("htmlpadre");
   element.classList.add("is-clipped");
}
function modalContactoClose() {
  var element = document.getElementById("modal");
  element.classList.remove("is-active");
}

function sub() {
  document.getElementById("info-cta-sub").style.display = "none";
    document.getElementById("info-cta-sub-done").style.display = "block";
}
