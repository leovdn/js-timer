// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// function changeBackground() {
//     document.body.classList.toggle('active');
// }

// setInterval(changeBackground, 2100)


// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const time = document.querySelector('.time');

start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
pause.addEventListener('dblclick', resetTimer);

let i = 1;
let timer;

function startTimer() {
    timer = setInterval(() => {
        time.innerText = i++;
    }, 10);
    start.setAttribute('disabled', '') 
}

function pauseTimer() {
    clearInterval(timer);
    start.removeAttribute('disabled');
}

function resetTimer() {
    time.innerText = 0;
    i = 0;
}
