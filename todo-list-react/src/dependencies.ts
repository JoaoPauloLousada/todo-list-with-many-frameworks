import { requestHandler } from "./core/utils/RequestHandler";
import { TodoHttpService } from "./core/services/TodoHttp.service";
import { FetchAdapter } from "./core/adapters/Fetch.adapter";
import { GetTodoList } from "./core/usecases/GetTodoList.usecase";

const fetchAdapter = new FetchAdapter();
const todoHttpService = new TodoHttpService(fetchAdapter, requestHandler);

export const getTodoListUseCase = new GetTodoList(todoHttpService);
