const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', checkOnCorrectSymbols);
inputEl.addEventListener('focus', removeClasses);


function checkOnCorrectSymbols() {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        
    } else {
        inputEl.classList.add('invalid');
    }
}

function removeClasses() {
    inputEl.classList.remove('valid', 'invalid');
}