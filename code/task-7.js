const inputControlRef = document.querySelector('#font-size-control');
const textSizeRef = document.querySelector('#text');

inputControlRef.addEventListener('input', onInput);

function onInput(event) {
  textSizeRef.style.fontSize = event.currentTarget.value + 'px';
}
