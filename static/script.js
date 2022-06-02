// abre e fecha menu lateral no mobile

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace('bi-list', "bi-x")
        : menuMobile.classList.replace('bi-x', "bi-list")
    body.classList.toggle("menu-nav-active")
})

// fechar menu quando clicar em alguma section e troca icone para list

const navItem = document.querySelectorAll(".nav-item")

navItem.forEach((item) => {
    item.addEventListener('click', () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace('bi-x', "bi-list")
        }
    })
})

// animando todos os items que possuirem o atributo "data-anime"

// criando array de items
const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    // identificando topo da tela
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    // varrendo array "item", verificando se o elemento esta no topo da tela
    item.forEach((Element) => {
        // se o elemento estiver no topo da tela adciona a class "animate" ao elemento
        if (windowTop > Element.offsetTop) {
            Element.classList.add("animate");
        } else {
            Element.classList.remove("animate");
        }
    });

}

animeScroll()

window.addEventListener("scroll", () => {
    animeScroll();
});