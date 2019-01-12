class TodoItem {
  constructor(content, isCompleted = false, isDeleted = false) {
    this.content = content;
    this.isCompleted = isCompleted;
    this.isDeleted = isDeleted;
  }

  generateItemHTML() {
    if (this.isCompleted) {
      return `<li class="todo_item">
      <div class="checked_icon"></div>
      <span class="todo_content done_content" onclick="setTodoItemUncompleted(event)">${
        this.content
      }</span>
      <button
        class="delete_icon hidden"
        onclick="deleteTodoItem(event)"
      ></button>
    </li>`;
    } else {
      return `<li class="todo_item">
      <div class="uncheck_icon"></div>
      <span class="todo_content" onclick="setTodoItemCompleted(event)">${
        this.content
      }</span>
      <button
        class="delete_icon hidden"
        onclick="deleteTodoItem(event)"
      ></button>
    </li>`;
    }
  }
}
