// Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

function countdown() {
    const numeros = [];
    for (let i = 10; i > 0; i--) {
        numeros.push(i);
    }

    console.log(numeros.join(', ') + '.');
}

countdown();
