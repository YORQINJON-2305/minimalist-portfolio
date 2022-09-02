var elBurgerBtn = document.querySelector(".site-header__burger-wrap");
var elHeader = document.querySelector(".site-header");

elBurgerBtn.addEventListener("click", function(){
    elHeader.classList.toggle("open");
})