import { requestHandler } from "./core/utils/RequestHandler";
import { TodoHttpService } from "./core/services/TodoHttp.service";
import { FetchAdapter } from "./core/adapters/Fetch.adapter";
import { GetTodoList } from "./core/usecases/GetTodoList.usecase";
import { CreateTodo } from "./core/usecases/CreateTodo.usecase";
import { DeleteTodo } from "./core/usecases/DeleteTodo.usecase";
import { UpdateTodo } from "./core/usecases/UpdateTodo.usecase";

const fetchAdapter = new FetchAdapter();
const todoHttpService = new TodoHttpService(fetchAdapter, requestHandler);

export const getTodoListUseCase = new GetTodoList(todoHttpService);
export const createTodoUseCase = new CreateTodo(todoHttpService);
export const deleteTodoUseCase = new DeleteTodo(todoHttpService);
export const updateTodoUseCase = new UpdateTodo(todoHttpService);
