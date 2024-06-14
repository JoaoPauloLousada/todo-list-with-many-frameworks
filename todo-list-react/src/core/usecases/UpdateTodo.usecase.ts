import { Todo } from "../models/Todo";
import { IUpdateTodo } from "../ports/Http";
import { IUseCase } from "./IUseCase";

export class UpdateTodo implements IUseCase<Todo, boolean> {
  constructor(private todoHttp: IUpdateTodo) {}

  async execute({
    vars: todo,
    next,
  }: {
    vars: Todo;
    next?:
      | ((args: { data: boolean | null; error: Error | null }) => unknown)
      | undefined;
  }): Promise<void> {
    const response = await this.todoHttp.update(todo);
    next?.(response);
  }
}
