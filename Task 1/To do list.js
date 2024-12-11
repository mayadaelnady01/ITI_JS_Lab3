let taskInput = document.querySelector('.task');
let addBtn = document.querySelector('.add');
let tasksContainer = document.querySelector('.div2');

function createTask(taskName) {
  let taskItem = document.createElement('div');
  taskItem.classList.add('item');
  let taskNameEl = document.createElement('p');
  taskNameEl.classList.add('task-name');
  taskNameEl.textContent = taskName;
  taskItem.appendChild(taskNameEl);

  let doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.classList.add('done');
  doneBtn.addEventListener('click', () => {
    taskItem.classList.toggle('green');
  });
  taskItem.appendChild(doneBtn);

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete');
  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
  });
  taskItem.appendChild(deleteBtn);

  tasksContainer.appendChild(taskItem);
}

addBtn.addEventListener('click', () => {
  let taskName = taskInput.value.trim();
  if (taskName) {
    createTask(taskName);
    taskInput.value = '';
  } else {
    alert('Please enter a task!');
  }
});
