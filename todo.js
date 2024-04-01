const workList = document.getElementById('order');
const newInput = document.getElementById('task');
const addButton = document.getElementById('add-task');

function addTask(text) {
  const thingsToDo = document.createElement('li');
  thingsToDo.classList.add('things-to-do');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    thingsToDo.classList.toggle('completed');
    if (thingsToDo.classList.contains('completed')) {
      workList.appendChild(thingsToDo); // Move completed items to bottom
    }
  });

  const label = document.createElement('label');
  label.innerText = text;
  label.addEventListener('click', function() {
    checkbox.click();
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', function() {
    workList.removeChild(thingsToDo);
  });

  thingsToDo.appendChild(checkbox);
  thingsToDo.appendChild(label);
  thingsToDo.appendChild(deleteButton);

  workList.appendChild(thingsToDo);
  newInput.value = ''; // Clear input field after adding
}

addButton.addEventListener('click', function() {
  const text = newInput.value.trim();
  if (text) {
    addTask(text);
  }
});
