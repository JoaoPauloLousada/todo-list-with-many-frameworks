import { Todo } from "./Todo";

export class TodoList {
  #list: Todo[];

  private constructor(list: Todo[]) {
    this.#list = list;
  }

  static create(list: Todo[] = []) {
    return new TodoList(list);
  }

  addMany(list: Todo[]) {
    this.#list.push(...list);
    return TodoList.create(this.#list);
  }

  get list() {
    return this.#list;
  }
}
