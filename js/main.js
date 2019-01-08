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
