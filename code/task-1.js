const ulRef = document.querySelector('#categories');

const itemRef = ulRef.querySelectorAll('.item');

console.log(`В списке ${itemRef.length} категории.`);

itemRef.forEach(item => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(
    `Количество злементов: ${item.querySelector('ul').children.length}`,
  );
});
