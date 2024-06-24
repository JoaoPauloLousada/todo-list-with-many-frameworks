import { TodoList } from "../models/TodoList";
import { IGetTodoList } from "../ports/Http";
import { IUseCase } from "./IUseCase";
import { Todo } from "../models/Todo";

export class GetTodoList implements IUseCase<undefined, TodoList> {
  constructor(private todoHttp: IGetTodoList) {}

  async execute({
    next,
  }: {
    next?:
      | ((args: { data: TodoList | null; error: Error | null }) => unknown)
      | undefined;
  }): Promise<void> {
    const response = await this.todoHttp.get();

    if (response.data) {
      next?.({
        data: TodoList.create(response.data.map((t) => Todo.create(t))),
        error: null,
      });
      return;
    }

    if (response.error) {
      next?.({
        data: null,
        error: response.error,
      });
    }
  }
}
