function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

let amount;
inputEl.addEventListener('input', () => {
  amount = inputEl.value;
});

function createBoxes() {
 let size = 30;
 let markup = '';

  for (let i=0; i<amount; i+=1) {
    markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;
  }
  boxes.insertAdjacentHTML('beforeend', markup);
}

function destroyBoxes(event) {
  boxes.innerHTML = '';
}





