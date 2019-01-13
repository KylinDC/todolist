class TodoItems {
  constructor() {
    if (localStorage.itemsStorage) {
      this.items = JSON.parse(localStorage.getItem("itemsStorage"));
    } else {
      this.items = {};
    }
  }

  saveToStorage() {
    localStorage.setItem("itemsStorage", JSON.stringify(this.items));
  }

  addItem(todoItem) {
    this.items[todoItem.content] = todoItem;
    this.saveToStorage();
  }

  getAllItem() {
    let itemArr = [];
    for (let item of Object.values(this.items)) {
      let todoItem = new TodoItem(
        item.content,
        item.isCompleted,
        item.isDeleted
      );
      itemArr.push(todoItem);
    }
    return itemArr;
  }

  getCompletedItem() {
    let itemArr = this.getAllItem();
    return itemArr.filter(e => e.isCompleted);
  }

  getActiveItem() {
    let itemArr = this.getAllItem();
    return itemArr.filter(e => !e.isCompleted);
  }

  removeDeletedItem() {
    for (let item in this.items) {
      if (this.items[item].isDeleted) {
        delete this.items[item];
      }
    }
    this.saveToStorage();
  }

  removeDoneItem() {
    for (let item in this.items) {
      if (this.items[item].isCompleted) {
        delete this.items[item];
      }
    }
    this.saveToStorage();
  }

  getLeftCount() {
    let leftCount = 0;
    for (let item in this.items) {
      if (!this.items[item].isCompleted) {
        leftCount++;
      }
    }
    return leftCount;
  }

  getItemByContent(content) {
    let allItems = this.getAllItem();
    return allItems.find(e => e.content === content);
  }

  // generateAllItemsHTML() {
  //   let itemsHTML = "";
  //   let items = this.getAllItem();
  //   items.forEach(e => (itemsHTML += e.generateItemHTML()));
  //   return itemsHTML;
  // }

  // generateActiveItemsHTML() {
  //   let itemsHTML = "";
  //   let allItems = this.getAllItem();
  //   let activeItems = allItems.filter(e => !e.isCompleted);
  //   activeItems.forEach(e => (itemsHTML += e.generateItemHTML()));
  //   return itemsHTML;
  // }

  // generateCompletedItemsHTML() {
  //   let itemsHTML = "";
  //   let allItems = this.getAllItem();
  //   let completedItems = allItems.filter(e => e.isCompleted);
  //   completedItems.forEach(e => (itemsHTML += e.generateItemHTML()));
  //   return itemsHTML;
  // }
}
