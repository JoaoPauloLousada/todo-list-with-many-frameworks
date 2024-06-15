export type TodoInput = Partial<Omit<Todo, "text">> & Pick<Todo, "text">;
export type TodoUpdate = Partial<Omit<Todo, "id">>;

export class Todo {
  id: string = this.createId();
  text: string = "";
  datetime?: Date = undefined;
  completed: boolean = false;

  private constructor(data: TodoInput) {
    Object.assign(this, {
      ...data,
      datetime: data.datetime ? new Date(data.datetime) : undefined,
    });
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
