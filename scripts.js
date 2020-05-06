function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function(letra, i){
        setTimeout(function(){
            elemento.innerHTML += letra;

        }, 75 * i)
    })
}

const segundoSubtitulo = document.querySelector('.subtitulo-2');
typeWriter(segundoSubtitulo);



