let itemStorage = new ItemStorage();

let todoList = document.getElementById("todo_lists");

let viewStateArr = ["all", "active", "completed"];
let viewState = viewStateArr[0];

window.onload = () => {
  showTodoList();
  showItemsInfo();
};

function showTodoList(viewState = viewStateArr[0]) {
  let todoListHTML = "";
  switch (viewState) {
    case "all":
      todoListHTML = itemStorage.generateAllItemsHTML();
      todoList.innerHTML = todoListHTML;
      break;
    case "active":
      todoListHTML = itemStorage.generateActiveItemsHTML();
      todoList.innerHTML = todoListHTML;
      break;
    case "completed":
      todoListHTML = itemStorage.generateCompletedItemsHTML();
      todoList.innerHTML = todoListHTML;
      break;
    default:
      break;
  }
}

function showItemsInfo() {
  let leftCounter = document.getElementById("left_counter");
  let clearButton = document.getElementById("clear_button");
  let counter = itemStorage.getLeftCount();
  leftCounter.innerText = counter;
  if (counter > 0) {
    clearButton.classList.remove("hidden");
  } else {
    clearButton.classList.add("hidden");
  }
}
