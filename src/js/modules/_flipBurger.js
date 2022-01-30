app.flipBurger = {

    init:function(){

		const burger = document.querySelector(".header__hamburger");

        burger.addEventListener("click", function () {
            burger.classList.toggle("header__hamburger--open");
        });


    }


}