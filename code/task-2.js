const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const collectionRef = document.querySelector('#ingredients');

const makeIndredientsSet = array => {
  return array.map(arr => {
    const itemRef = document.createElement('li');
    itemRef.textContent = arr;

    return itemRef;
  });
};

const elements = makeIndredientsSet(ingredients);
collectionRef.append(...elements);
