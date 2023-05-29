// Ativar links
function ativarMenu(e){
    if(document.location.href.includes(e.href)){
        e.classList.add('ativo')
    }
}

navMenu = document.querySelectorAll('.header-menu a');


if(navMenu){
navMenu.forEach(ativarMenu);
}

// Ativar itens do orçamento

let parametros = new URLSearchParams(location.search)

function ativarProduto(p){
    const elemento = document.getElementById(p)
    if(elemento){
    elemento.checked = true
    }

}

parametros.forEach((ativarProduto))

// Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function mostrarPergunta(p){

    let ariaControl = p.target.getAttribute('aria-controls');
    let pergunta = document.querySelector(`#${ariaControl}`)
    pergunta.classList.toggle('ativo');
    let ativo = pergunta.classList.contains('ativo');
    p.target.setAttribute('aria-expanded', ativo);

}
if(perguntas){
    perguntas.forEach((pergunta)=>{
        pergunta.addEventListener('click', mostrarPergunta);
    })
}


//Galeria perguntas

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function mudarFoto(e){

    const media = matchMedia('(min-width: 1000px)').matches;
    if(media){
        galeriaContainer.prepend(e.target)
    }
}

if(galeria, galeriaContainer){
    galeria.forEach((foto)=> {
        foto.addEventListener('click', mudarFoto)
    })    
}


// animação

if(window.SimpleAnime){
    new SimpleAnime();
};