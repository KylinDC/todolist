class TodoItem {
  constructor(content, isCompleted = false, isDeleted = false) {
    this.content = content;
    this.isCompleted = isCompleted;
    this.isDeleted = isDeleted;
  }

  generateItemHTML() {
    if (this.isCompleted) {
      return `<div class="todo_item" ">
      <div class="checked_icon"></div>
      <div class="todo_content done_content">${this.content}</div>
      <div class="delete_icon hidden" onclick="deleteTodoItem(event)"></div>
    </div>`;
    } else {
      return `<div class="todo_item">
      <div class="uncheck_icon"></div>
      <div class="todo_content" onclick="setTodoItemCompleted(event)"> ${
        this.content
      }</div>
      <div class="delete_icon hidden" onclick="deleteTodoItem(event)"></div>
    </div>`;
    }
  }
}
