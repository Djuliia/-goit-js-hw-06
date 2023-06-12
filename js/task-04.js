let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrecrement = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');

btnDecrement.addEventListener('click', onDecrement);
btnIncrecrement.addEventListener('click', onIncrement);

function onDecrement() {
    counterValue -=1;
    valueSpan.textContent = counterValue;
}

function onIncrement() {
    counterValue +=1;
    valueSpan.textContent = counterValue;
}

