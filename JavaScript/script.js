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
document.getElementsByClassName('.voltar').addEventListener('click', () => {
    const duracao = 2000; //tempo total da animação (em ms)
    const inicio = window.scrollY; //scrool da barra vertical
    const comeco = performance.now();
    function rolar(timestamp) {
        const progresso = Math.min((timestamp - comeco) / duracao, 1);
        const easeOut = 1 - Math.pow(1 - progresso, 3); //desacelera suavemente
        window.scrollTo(0, inicio * (1 - easeOut));
        if(progresso < 1) requestAnimationFrame(rolar);
    }
    requestAnimationFrame(rolar);
});



