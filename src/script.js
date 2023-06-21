let Amount = document.getElementById('amount');
let category = document.getElementById('Category');
let Add = document.getElementById('add');
let spentList = document.querySelector('#spent-list');
const spentItem = document.querySelector('.spent-item');

// console.log(spentItem);

const addItem = () => {
  const div = document.createElement('div')
  div.className = 'w-2/4 flex items-center p-8 text-center h-9 mt-6 bg-slate-400 rounded-lg appearance-none'
  div.id = 'spent-list'
  spentItem.appendChild(div)
  div.textContent = `Amount = ${Amount.value} Category = ${category.value}`
};

Add.addEventListener('click', () => {
  addItem();
});
