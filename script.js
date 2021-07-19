// document.body -> Refere a toda a página
// .addEventListener('TIPO_DE_EVENTO', FUNÇÂO) -> Observa a página a espera de um evento. 1º PARÂMETRO = tipo de evento; 2º PARÂMETRO = nome do evento;
                                // - keydown -> Aperta uma tecla
                                // - keyup -> Solta uma tecla
document.body.addEventListener('keyup', (event)=>{ // event -> Recebe como parâmetro o próprio evento 
    playSound(event.code.toLowerCase());    // event.code -> Identifica a tecla que foi precionada
                                            // toLowerCase -> Transforma todas as letras em minúsculos
});
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);   // Seleciona o arquivo de audio baseado na tecla que foi apertada  
    let keyElement = document.querySelector(`div[data-key="${sound}"]`); // Seleciona uma div com atributo 'data-key'
    console.log(keyElement);

    if (audioElement) {
        audioElement.currentTime = 0;   // Executa a ação sem esperar que a ação anterior precisa concluir.
        audioElement.play();    // Executa o som
    }
    if (keyElement) {
        keyElement.classList.add('active'); // classList.add() -> Adiciona uma classe

        setTimeout(()=>{    // Executa uma função depois de determinado tempo. 1º PARÂMETRO = função que será executada; 2º PARÂMETRO = tempo em milisegundos;
            keyElement.classList.remove('active');  // classList.remove() -> Remove uma classe
        }, 300);
    }
}