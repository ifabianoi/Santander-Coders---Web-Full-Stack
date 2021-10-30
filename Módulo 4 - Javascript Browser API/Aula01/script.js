

console.log(document.querySelector('.message').textContent);

// Seleciona e manipula elementos HTML

// document.querySelector('.message').textContent = 'Número correto!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.left').innerHTML);

// document.querySelector('.guess').value = 23;

// Lida com eventos Click

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    // document.querySelector('.message').textContent = 'Número correto';

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) { // 0 falsy value
        // document.querySelector('.message').textContent = 'Nenhum número!';
        displayMessage('Nenhum número');
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Número Correto!';
        displayMessage('Número Correto!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Muito alto!' : 'Muito baixo!');
            document.querySelector('.score').textContent = score;
            score--;
        } else {
            document.querySelector('.message').textContent = 'Você perdeu o jogo!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

// CODING CHALLENGE

// Implemente a funcionalidade para resetar o jogo para que o jogador possa fazer uma nova tentativa!

// 1. Selecione o elemento com a classe 'again' e conecte com o evento click handler.

// 2. Na função do handler, reinicie os valores iniciais do score e da variável secretNumber.

// 3. Reinicie as condições iniciais da mensagem, número, score e do input guess.

// 4. Reinicie também o background color original (#222) e a largura do número (15rem).

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Comece a advinhar...';

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
});





