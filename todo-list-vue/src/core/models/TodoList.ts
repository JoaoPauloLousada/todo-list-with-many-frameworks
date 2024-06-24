import { Todo } from "./Todo";

export class TodoList {
  private _list: Todo[];

  private constructor(list: Todo[]) {
    this._list = list;
  }

  static create(list: Todo[] = []) {
    const newList = new TodoList(list);
    newList.sortByDate();
    return newList;
  }

  addMany(list: Todo[]) {
    this._list.push(...list);
    return TodoList.create(this._list);
  }

  get list(): Todo[] {
    return this._list;
  }

  sortByDate() {
    this._list.sort((a, b) => {
      if (!a.datetime && !b.datetime)
        return a.createdAt.getTime() - b.createdAt.getTime();
      if (!a.datetime) return -1;
      if (!b.datetime) return 1;

      return a.datetime.getTime() - b.datetime.getTime();
    });
  }
}
