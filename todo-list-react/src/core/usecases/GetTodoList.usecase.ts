import { Todo } from "../models/Todo";
import { IGetTodoList } from "../ports/Http";
import { IUseCase } from "./IUseCase";

export class GetTodoList implements IUseCase<undefined, Todo[]> {
  constructor(private todoHttp: IGetTodoList) {}

  async execute({
    next,
  }: {
    next?:
      | ((args: { data: Todo[] | null; error: Error | null }) => unknown)
      | undefined;
  }): Promise<void> {
    const response = await this.todoHttp.get();
    next?.(response);
  }
}
