function myFunction() {
    var menu = document.getElementById("bMenu");
    var toggleIcon = document.getElementsByClassName("header__icon-menu")[0];
    if (menu.style.display === "block") {
        toggleIcon.classList.toggle('expanded');
        menu.style.display = "none";
    } else {
        toggleIcon.classList.toggle('expanded');
        menu.style.display = "block";
    }
}