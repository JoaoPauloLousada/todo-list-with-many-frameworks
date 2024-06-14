import { Todo } from "../models/Todo";
import { IDeleteTodo } from "../ports/Http";
import { IUseCase } from "./IUseCase";

export class DeleteTodo implements IUseCase<Todo["id"], boolean> {
  constructor(private todoHttp: IDeleteTodo) {}

  async execute({
    vars: id,
    next,
  }: {
    vars: string;
    next?:
      | ((args: { data: boolean | null; error: Error | null }) => unknown)
      | undefined;
  }): Promise<void> {
    const response = await this.todoHttp.delete(id);
    next?.(response);
  }
}
