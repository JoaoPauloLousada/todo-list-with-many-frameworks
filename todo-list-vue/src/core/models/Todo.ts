import { format } from "date-fns";

export type TodoUpdate = Partial<Omit<Todo, "id">>;
export type TodoInput = Partial<Omit<Todo, "text" | "datetime">> & {
  text: Todo["text"];
  datetime?: Date | string;
};

export class Todo {
  id: string = this.createId();
  text: string = "";
  datetime?: Date = undefined;
  completed: boolean = false;
  createdAt: Date = new Date();

  private constructor(data: TodoInput) {
    Object.assign(this, {
      ...data,
      datetime: data.datetime ? new Date(data.datetime) : undefined,
      createdAt: data.createdAt ? new Date(data.createdAt) : this.createdAt,
    });
  }

  private createId() {
    return crypto.randomUUID();
  }

  static create(data: TodoInput) {
    return new Todo(data);
  }

  update(data: TodoUpdate): Todo {
    return Todo.create({ ...this, ...data });
  }

  formatDatetime() {
    if (this.datetime) return format(this.datetime, "dd/MM/yyyy - HH:mm");
    return "";
  }
}
