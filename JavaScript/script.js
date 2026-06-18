
const btn = document.getElementById("btn");

// Mostrar ou esconder o botão
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        btn.classList.add("show");

    } else {

        btn.classList.remove("show");

    }

});

// Voltar ao topo
btn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

