//RESPONSÁVEL PELO MENU HAMBURGUER
function mudouTamanho() {
if (window.innerWidth >= 769) {
    itens.style.display = 'block'
} else {
    itens.style.display = 'none'
}
}

//MOSTRA OS ITENS AO CLICAR NO MENU HAMBUERGUER
function clickMenu() {
var itens = document.getElementById("itens");
if (itens.style.display == 'block') {
    itens.style.display = 'none';
} else {
    itens.style.display = 'block';
}
}


//MUDANDO A COR DA DIV PERSONAGENS QUANDO O MOUSE PASSA PRO CIMA E QUANDO ELE SAI '#leone'
let mudaCor = document.querySelector() 
mudaCor.addEventListener('mouseover', () => {
mudaCor.style.background = 'red'
})
mudaCor.addEventListener('mouseleave', () => {
mudaCor.style.background = ''
})

//VOLTA AO TOPO AO CLICAR NO BOTÃO
function volar() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}