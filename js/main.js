let todoItems = new TodoItems();

let viewStateArr = ["all", "active", "completed"];
let viewState = viewStateArr[0];

window.onload = () => {
  refreshView();
};

function refreshView() {
  showTodoList();
  showItemsInfo();
}

function showTodoList() {
  cleanTodoList();
  let itemsToRender = [];
  switch (viewState) {
    case "all":
      itemsToRender = todoItems.getAllItem();
      break;
    case "active":
      itemsToRender = todoItems.getActiveItem();
      break;
    case "completed":
      itemsToRender = todoItems.getCompletedItem();
      break;
    default:
      break;
  }
  itemsToRender.forEach(e => renderItem(e));
}

function showItemsInfo() {
  let leftCounter = document.getElementById("left_counter");
  let clearButton = document.getElementById("clear_button");
  let counter = todoItems.getLeftCount();
  leftCounter.innerText = counter;
  if (counter > 0) {
    clearButton.classList.remove("hidden");
  } else {
    clearButton.classList.add("hidden");
  }
}

function submitTodo(event) {
  let todoInput = document.getElementById("todo_input");
  let todoContent = todoInput.value;
  if (event.keyCode === 13 && todoContent) {
    addTodo(todoContent);
    todoInput.value = "";
  }
}

function addTodo(todoContent) {
  let todoItem = new TodoItem(todoContent);
  todoItems.addItem(todoItem);
  renderItem(todoItem);
}

function deleteTodoItem(event) {
  let parentNode = event.target.parentNode;
  let contentNode = parentNode.getElementsByClassName("todo_content")[0];
  let todoItem = todoItems.getItemByContent(contentNode.innerText);
  todoItem.isDeleted = true;
  todoItems.addItem(todoItem);
  todoItems.removeDeletedItem();
  renderDeletedItem(parentNode);
}

function setTodoItemCompleted(event) {
  let todoItemNode = event.target;
  let todoItem = todoItems.getItemByContent(todoItemNode.innerText);
  todoItem.isCompleted = true;
  todoItems.addItem(todoItem);
  renderSetCompletedItem(todoItemNode);
}

function setTodoItemActive(event) {
  let todoItemNode = event.target;
  let todoItem = todoItems.getItemByContent(todoItemNode.innerText);
  todoItem.isCompleted = false;
  todoItems.addItem(todoItem);
  renderUndoCompletedItem(todoItemNode);
}

function clearCompleted() {
  todoItems.removeDoneItem();
  refreshView();
}

function showAllTodoList() {
  viewState = viewStateArr[0];
  changeButtonState();
  showTodoList();
}

function showActiveTodoList() {
  viewState = viewStateArr[1];
  changeButtonState();
  showTodoList();
}

function showCompletedTodoList() {
  viewState = viewStateArr[2];
  changeButtonState();
  showTodoList();
}

function changeButtonState() {
  let allButton = document.getElementById("all_button");
  let activeButton = document.getElementById("active_button");
  let completedButton = document.getElementById("completed_button");

  switch (viewState) {
    case "all":
      allButton.classList.add("selected_button");
      activeButton.classList.remove("selected_button");
      completedButton.classList.remove("selected_button");
      break;
    case "active":
      allButton.classList.remove("selected_button");
      activeButton.classList.add("selected_button");
      completedButton.classList.remove("selected_button");
      break;
    case "completed":
      allButton.classList.remove("selected_button");
      activeButton.classList.remove("selected_button");
      completedButton.classList.add("selected_button");
      break;
    default:
      break;
  }
}
