const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

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


