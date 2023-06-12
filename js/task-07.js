const inputRange = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputRange.addEventListener('input', changeFontsize);

function changeFontsize(event) {
    const value = `${event.target.value}px`;
    spanText.style.fontSize = value;
  }