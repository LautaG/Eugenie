function qsE() {
    document.getElementById("maincontainer-empresa").style.display = "block";
    document.getElementById("maincontainer-historia").style.display = "none";
     document.getElementById("maincontainer-socios").style.display = "none";
       document.getElementById("img-qs-empresa").style.display = "block";
    document.getElementById("img-qs-historia").style.display = "none";
     document.getElementById("img-qs-socios").style.display = "none";
      var element = document.getElementById("boton-empresa");
   element.classList.add("active");
    var element = document.getElementById("boton-historia");
   element.classList.remove("active");
    var element = document.getElementById("boton-socios");
   element.classList.remove("active");
};

function qsH() {
    document.getElementById("maincontainer-empresa").style.display = "none";
    document.getElementById("maincontainer-historia").style.display = "block";
     document.getElementById("maincontainer-socios").style.display = "none";
     document.getElementById("img-qs-empresa").style.display = "none";
    document.getElementById("img-qs-historia").style.display = "block";
     document.getElementById("img-qs-socios").style.display = "none";
     var element = document.getElementById("boton-historia");
   element.classList.add("active");
    var element = document.getElementById("boton-empresa");
   element.classList.remove("active");
    var element = document.getElementById("boton-socios");
   element.classList.remove("active");
    };

function qsS() {
    document.getElementById("maincontainer-empresa").style.display = "none";
    document.getElementById("maincontainer-historia").style.display = "none";
     document.getElementById("maincontainer-socios").style.display = "block";
     document.getElementById("img-qs-empresa").style.display = "none";
    document.getElementById("img-qs-historia").style.display = "none";
     document.getElementById("img-qs-socios").style.display = "block";
   var element = document.getElementById("boton-socios");
   element.classList.add("active");
    var element = document.getElementById("boton-empresa");
   element.classList.remove("active");
    var element = document.getElementById("boton-historia");
   element.classList.remove("active");
    };