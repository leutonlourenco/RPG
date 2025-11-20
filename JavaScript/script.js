//MENU HAMBURGUER EM UMA TELA GRANDE
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


//MUDANDO A COR QUANDO O MOUSE PASSA PRO CIMA E QUANDO ELE SAI
const mudaCor = document.querySelectorAll('.mudaCor') 
mudaCor.forEach(cor => {
    cor.addEventListener('mouseover', () => {
        cor.style.background = 'rgb(255, 0, 0)'
    })
    cor.addEventListener('mouseout', () => {
    cor.style.background = ''
    })
}); 

//BOTÃO DE VOLTA PARA O TOPO
const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });


