
const display = document.querySelector('.display');
const tds = document.querySelectorAll('.key');
let keysDigitados = [];
let calculo = '';
let contKey = 0;

document.addEventListener('click', function(e) {
    const elemento = e.target;
    keysDigitados.push(elemento);

    if(keysDigitados[0].classList.contains('key-operator')) {
        keysDigitados.shift();
        return;
    }

    if(elemento.classList.contains('key-operator')) {
        contKey++;
        if (contKey > 1) return;
    } else {
        contKey = 0;
    }

    if (elemento.classList.contains('key')) {
        const valorDoKey = elemento.getAttribute('name');

        calculo += valorDoKey;
        mostraNoDisplay(calculo);
    }

    if (elemento.classList.contains('key-clean')) {
        limpar();
    }

    if (elemento.classList.contains('key-calcular')) {
        calculo = calcula();
        display.innerHTML = calculo;
    }
})

function limpar() {
    calculo = '';
    display.innerHTML = '';
    keysDigitados = [];
}

function mostraNoDisplay() {
    display.innerHTML = calculo;
}

function convertaString(calculo) {
    let strNumber = '';
    const numerosEOperator = [];

    for (let valor of calculo) {
    
        if (!Number(valor) && Number(valor) !== 0) {
            numerosEOperator.push(strNumber);
            strNumber = '';
            numerosEOperator.push(valor);
            continue;
        } else {
            strNumber += valor;
        }
    }

    numerosEOperator.push(strNumber);

    return numerosEOperator;
}

function calcula() {
    const dadosDoCalculo = convertaString(calculo);

        if (!display.value) return;

        if(dadosDoCalculo[dadosDoCalculo.length -1] === '') return;

        let resultado = Number(dadosDoCalculo[0]);

        for(let i = 0; i < dadosDoCalculo.length ; i += 1) {
            if (dadosDoCalculo[i] === '+') {
                resultado += Number(dadosDoCalculo[i + 1]);
                i++;
                continue;
            } else if (dadosDoCalculo[i] === '-') {
                resultado -= Number(dadosDoCalculo[i + 1]);
                i++;
                continue;
            } else if (dadosDoCalculo[i] === 'x') {
                resultado *= Number(dadosDoCalculo[i + 1]);
                i++;
                continue;
            }
        }

    return resultado;
}

