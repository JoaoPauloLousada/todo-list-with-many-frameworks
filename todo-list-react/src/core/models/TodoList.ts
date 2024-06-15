import { Todo } from "./Todo";

export class TodoList {
  #list: Todo[];

  private constructor(list: Todo[]) {
    this.#list = list;
  }

  static create(list: Todo[] = []) {
    const newList = new TodoList(list);
    newList.sortByDate();
    return newList;
  }

  addMany(list: Todo[]) {
    this.#list.push(...list);
    return TodoList.create(this.#list);
  }

  get list() {
    return this.#list;
  }

  sortByDate() {
    this.#list.sort((a, b) => {
      if (!a.datetime && !b.datetime)
        return a.createdAt.getTime() - b.createdAt.getTime();
      if (!a.datetime) return -1;
      if (!b.datetime) return 1;

      return a.datetime.getTime() - b.datetime.getTime();
    });
  }
}
