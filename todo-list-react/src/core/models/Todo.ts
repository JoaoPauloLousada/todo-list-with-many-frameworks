export type TodoInput = Partial<Omit<Todo, "text">> & Pick<Todo, "text">;
export type TodoUpdate = Partial<Omit<Todo, "id">>;

export class Todo {
  id: string = "";
  text: string = "";
  datetime?: Date = undefined;
  completed: boolean = false;

  private constructor(data: TodoInput) {
    Object.assign(this, { ...data, completed: false, id: this.createId() });
  }

  static create(data: TodoInput) {
    return new Todo(data);
  }

  update(data: TodoUpdate): Todo {
    return Todo.create({ ...this, ...data });
  }

  private createId() {
    return crypto.randomUUID();
  }
}
