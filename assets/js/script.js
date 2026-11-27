
// Efeito da navbar ao rolar a página

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// Carrossel dos chalés

const containerChales = document.querySelector(".chales-container");

const setaAnterior = document.querySelector(".carrossel-prev");

const setaProxima = document.querySelector(".carrossel-next");


if (containerChales && setaAnterior && setaProxima) {

    setaAnterior.addEventListener("click", () => {

        containerChales.scrollBy({
            left: -containerChales.clientWidth * 0.85,
            behavior: "smooth"
        });

    });


    setaProxima.addEventListener("click", () => {

        containerChales.scrollBy({
            left: containerChales.clientWidth * 0.85,
            behavior: "smooth"
        });

    });

}
