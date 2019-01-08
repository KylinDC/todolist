class TodoItem {
  constructor(content) {
    this.content = content;
    this.creatDate = new Date();
    this.isCompleted = false;
    this.isDeleted = false;
  }

  setCompleted() {
    this.isCompleted = true;
  }

  setUncompleted() {
    this.isCompleted = false;
  }

  delet() {
    this.isDeleted = true;
  }

  // get todoItemJson() {
  //   return {
  //     creatDate: this.creatDate,
  //     content: this.content,
  //     isCompleted: this.isCompleted
  //   };
  // }

  generateItemHTML() {
    if (this.isCompleted) {
      return `<div class="todo_item">
      <div class="checked_icon"></div>
      <div class="todo_content done_content">this.content</div>
      <div class="delete_icon hidden"></div>
    </div>`;
    } else {
      return `<div class="todo_item">
      <div class="uncheck_icon"></div>
      <div class="todo_content">${this.content}</div>
      <div class="delete_icon"></div>
    </div>`;
    }
  }
}

// export default TodoItem;

module.exports = TodoItem;
