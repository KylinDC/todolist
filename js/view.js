let todoList = document.getElementById("todo_lists");

function cleanTodoList() {
  let todoItemElements = todoList.querySelectorAll(".todo_item");
  todoItemElements.forEach(e => todoList.removeChild(e));
}

function renderItem(todoItem) {
  let todoTemplate;
  if (todoItem.isCompleted) {
    todoTemplate = document.getElementById("completed_item_template");
  } else {
    todoTemplate = document.getElementById("active_item_template");
  }
  let content = todoTemplate.content.querySelector(".todo_content");
  content.textContent = todoItem.content;
  let clone = document.importNode(todoTemplate.content, true);
  todoList.appendChild(clone);
}

function renderDeletedItem(parentNode) {
  todoList.removeChild(parentNode);
}

function renderSetCompletedItem(target) {
  let parentNode = target.parentNode;

  target.setAttribute("onclick", "setTodoItemActive(event)");

  let checkIcon = parentNode.querySelector(".uncheck_icon");
  checkIcon.setAttribute("class", "checked_icon");

  let content = parentNode.querySelector(".todo_content");
  content.classList.add("done_content");
}

function renderUndoCompletedItem(target) {
  let parentNode = target.parentNode;
  target.setAttribute("onclick", "setTodoItemCompleted(event)");

  let checkIcon = parentNode.querySelector(".checked_icon");
  checkIcon.setAttribute("class", "uncheck_icon");

  let content = parentNode.querySelector(".todo_content");
  content.classList.remove("done_content");
}
