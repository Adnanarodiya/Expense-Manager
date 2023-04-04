let Amount = document.getElementById('amount');
let category = document.getElementById('Category');
let Add = document.getElementById('add');
let spentList = document.querySelector('#spent-list');
let spentItem = document.querySelector('.spent-item');

console.log(spentItem);

spentItem = () => {
  spentItem.classList.remove('hidden');
};

Add.addEventListener('click', () => {
  // console.log(spentList.innerHTML);
  // console.log(Amount.value, category.value);
  spentList.innerHTML = `Amount = ${Amount.value} Category = ${category.value}`;
  spentItem();
});
