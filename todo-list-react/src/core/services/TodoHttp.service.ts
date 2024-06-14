import { Todo } from "../models/Todo";
import {
  HttpPayload,
  ICreateTodo,
  IDeleteTodo,
  IGetTodoList,
  IHttpClient,
  IUpdateTodo,
} from "../ports/Http";
import { RequestHandler } from "../utils/RequestHandler";

export class TodoHttpService
  implements IGetTodoList, ICreateTodo, IUpdateTodo, IDeleteTodo
{
  constructor(
    private httpClient: IHttpClient,
    private requestHandler: RequestHandler
  ) {}

  private url = "https://jsonplaceholder.typicode.com/todos";

  async get(): Promise<HttpPayload<Todo[]>> {
    return await this.requestHandler.handle(() =>
      this.httpClient.get(this.url)
    );
  }

  async update(todo: Todo): Promise<HttpPayload<boolean>> {
    return await this.requestHandler.handle(() =>
      this.httpClient.put(this.url + `/${todo.id}`, {
        body: JSON.stringify(todo),
      })
    );
  }

  async save(todo: Todo): Promise<HttpPayload<boolean>> {
    return await this.requestHandler.handle(() =>
      this.httpClient.post(this.url, { body: JSON.stringify(todo) })
    );
  }

  async delete(id: string): Promise<HttpPayload<boolean>> {
    return await this.requestHandler.handle(() =>
      this.httpClient.delete(this.url + `/${id}`)
    );
  }
}
