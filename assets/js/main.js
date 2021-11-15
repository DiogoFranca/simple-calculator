const display = document.querySelector('.display');

document.addEventListener('click', e => {
    const el = e.target;

    if(el.classList.contains('key')) {
        showOnScreen(el.innerText);
    }

    if(el.classList.contains('key-calcular')) {
        if(!display.value) return;

        const total = calculate(display.value);

        cleanScreen();
        showResultOnScreen(total)
    }

    if(el.classList.contains('key-clean-all')) {
        cleanScreen();
    }

    if(el.classList.contains('key-clean')) {
        cleanOne();
    }
});

function showOnScreen(valueKey) {
    display.value += valueKey;
}

function cleanScreen() {
    display.value = '';
}

function calculate(displayValue) {
    try {
        const result = eval(displayValue);
        return result;
    } catch(error) {
        alert('Operação inválida, tente novamente.')
    }
}

function showResultOnScreen(total) {
    if(!total) return;
    display.value = total;
}

function cleanOne() {
    display.value = display.value.slice(0 , display.value.length -1);
}