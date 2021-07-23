document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

function menuLatShow() {
    document.getElementById("menu-oculto").style.display = "block";
    document.getElementById("boton-show").style.display = "none";
    document.getElementById("boton-back").style.display = "block";
};

function menuLatClose() {
    document.getElementById("menu-oculto").style.display = "none";
    document.getElementById("boton-show").style.display = "block";
    document.getElementById("boton-back").style.display = "none";
};