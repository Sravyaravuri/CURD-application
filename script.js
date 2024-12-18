// script.js
const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const itemList = document.getElementById('itemList');

let items = [];

// Create (Add new item)
addBtn.addEventListener('click', () => {
  const newItem = itemInput.value.trim();
  if (newItem) {
    items.push(newItem);
    renderList();
    itemInput.value = '';
  }
});

// Read and Render Items
function renderList() {
  itemList.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item}</span>
      <div>
        <button onclick="editItem(${index})">Edit</button>
        <button onclick="deleteItem(${index})">Delete</button>
      </div>
    `;
    itemList.appendChild(li);
  });
}

// Update (Edit an item)
function editItem(index) {
  const newItem = prompt('Edit item:', items[index]);
  if (newItem !== null) {
    items[index] = newItem.trim();
    renderList();
  }
}

// Delete (Remove an item)
function deleteItem(index) {
  items.splice(index, 1);
  renderList();
}