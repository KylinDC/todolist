// let TodoItem = require("./todo_item");

class ItemStorage {
  constructor() {
    this.storage = localStorage;
  }

  addItem(todoItem) {
    this.storage[todoItem.content] = JSON.stringify(todoItem);
  }

  updateItem(todoItem) {
    this.storage[todoItem.content] = JSON.stringify(todoItem);
  }

  updateItemStorage() {
    for (let i = 1; i < this.storage.length; i++) {
      let item = JSON.parse(this.storage.getItem(this.storage.key(i)));
      if (item.isDeleted) {
        this.storage.removeItem(this.storage.key(i));
        i--;
      }
    }
  }

  getAllItem() {
    let itemArr = [];
    for (let i = 1; i < this.storage.length; i++) {
      let item = JSON.parse(this.storage.getItem(this.storage.key(i)));
      itemArr.push(item);
    }
    return itemArr;
  }

  deleteDoneItem() {
    for (let i = 1; i < this.storage.length; i++) {
      let item = JSON.parse(this.storage.getItem(this.storage.key(i)));
      if (item.isCompleted) {
        this.storage.removeItem(this.storage.key(i));
        i--;
      }
    }
  }

  getLeftCount() {
    let items = this.getAllItem();
    let leftCount = 0;
    for (let i of items) {
      if (!i.isCompleted) {
        leftCount++;
      }
    }
    return leftCount;
  }

  generateItemsHTML() {
    let itemsHTML = "";
    let items = getAllItem();
    items.forEach(e => (itemsHTML += e.generateItemHTML()));
    return itemsHTML;
  }
}

// export default ItemStorage;
module.exports = ItemStorage;
