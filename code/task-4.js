const actions = document.querySelectorAll('#counter button');

const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

decrementBtnRef.addEventListener('click', function () {
  counterValue.decrement();
  valueRef.textContent = counterValue.value;
});

incrementBtnRef.addEventListener('click', function () {
  counterValue.increment();
  valueRef.textContent = counterValue.value;
});
