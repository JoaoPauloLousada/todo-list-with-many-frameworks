import { Todo } from "../models/Todo";
import { ICreateTodo } from "../ports/Http";
import { IUseCase } from "./IUseCase";

export class CreateTodo implements IUseCase<Todo, boolean> {
  constructor(private todoHttp: ICreateTodo) {}

  async execute({
    vars: todo,
    next,
  }: {
    vars: Todo;
    next?: (args: { data: boolean | null; error: Error | null }) => unknown;
  }) {
    const response = await this.todoHttp.save(todo);
    next?.(response);
  }
}
