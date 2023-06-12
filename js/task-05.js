const inputEl = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');

inputEl.addEventListener('input', showOutputName);

function showOutputName() {
    if (inputEl.value) {
        outputSpan.textContent = inputEl.value;
    } else {
        outputSpan.textContent = 'Anonymous';
    }
}
