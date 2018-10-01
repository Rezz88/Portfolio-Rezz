var menu = document.getElementById("menu");
var nav_menu = document.getElementById("nav-menu");

menu.addEventListener("click", function() {
  menu.classList.toggle("clicked");
  nav_menu.classList.toggle("open");

  console.log(menu);
  console.log(nav_menu);
});
