const controslRef = document.querySelector('#controls');
const inputRef = controslRef.querySelector('input');
const boxesRef = document.querySelector('#boxes');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');

renderBtnRef.addEventListener('click', createBoxes);

function createBoxes(amount) {
  const newDivRef = document.createElement('div');

  console.log(newDivRef);
}

destroyBtnRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  console.log('Клик удалить');
}

//Повесить слушателя на input
//Следить сколько currentTarget.value и столько создавать div
//После добавлять в основной див
//randomColor();
