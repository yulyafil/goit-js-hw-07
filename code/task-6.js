const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
  inputRef.value.length > Number(inputRef.dataset.length) ||
  inputRef.value.length < Number(inputRef.dataset.length)
    ? inputRef.classList.add('invalid')
    : inputRef.classList.replace('invalid', 'valid');
}
