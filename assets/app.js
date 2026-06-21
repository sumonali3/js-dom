let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let toDo = document.querySelector('#items');
let completeUl = document.querySelector('.complete-task ul');

// function

let createTask = function (task) {
     let listItem = document.createElement('li');
     let checkBox = document.createElement('input');
     let label = document.createElement('label');

     listItem.className = 'item';
     label.innerText = task;
     checkBox.type = 'checkbox';

     listItem.appendChild(checkBox);
     listItem.appendChild(label);

     return listItem;
};

let addTask = function (event) {
     event.preventDefault();

     let listItem = createTask(newTask.value);
     toDo.appendChild(listItem);
     newTask.value = '';
     //bind the new list item to the incomplete task
     bindInCompleteItems(listItem, completeTask);
};

let completeTask = function () {
     let listItem = this.parentNode;
     let deleteBtn = document.createElement('button');
     deleteBtn.innerText = 'Delete';
     deleteBtn.className = 'delete';
     listItem.appendChild(deleteBtn);

     let checkBox = listItem.querySelector('input[type="checkbox"]');
     checkBox.remove();
     completeUl.appendChild(listItem);
     bindCompleteItems(listItem, deleteTask);
};
let deleteTask = function () {
     let listItem = this.parentNode;
     let ul = listItem.parentNode;
     ul.removeChild(listItem);
};

let bindInCompleteItems = function (taskItem, checkboxClick) {
     let checkBox = taskItem.querySelector('input[type="checkbox"]');
     checkBox.onchange = checkboxClick;
};

let bindCompleteItems = function (taskItem, deleteButtonClick) {
     let deleteButton = taskItem.querySelector('.delete');
     deleteButton.onclick = deleteButtonClick;
};
for (let i = 0; i < toDo.children.length; i++) {
     bindInCompleteItems(toDo.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
     bindCompleteItems(completeUl.children[i], deleteTask);
}
form.addEventListener('submit', addTask);
