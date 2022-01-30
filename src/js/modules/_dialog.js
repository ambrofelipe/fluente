app.dialog = {

    init:function(){
        const thanks = document.querySelectorAll(".thanks, .dim");
        const closeBtn = document.querySelector(".thanks button");
        const loading = document.querySelector(".loading");

        closeBtn.addEventListener("click", function () {
            thanks.forEach(el => {
                el.classList.remove("on");
                setTimeout(() => { el.classList.remove("visible"); }, 300)
            });

            loading.classList.remove("on");
            setTimeout(() => { loading.classList.remove("visible"); }, 300)
        });
    }

}