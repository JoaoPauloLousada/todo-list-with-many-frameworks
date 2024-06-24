import { Todo } from "../models/Todo";

export interface IHttpClient {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, options: RequestInit): Promise<T>;
  put<T>(url: string, options: RequestInit): Promise<T>;
  delete<T>(url: string): Promise<T>;
}

export interface IHttpClient {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, options: RequestInit): Promise<T>;
  put<T>(url: string, options: RequestInit): Promise<T>;
  delete<T>(url: string): Promise<T>;
}

export type HttpPayload<T> =
  | {
      data: null;
      error: Error;
    }
  | {
      data: T;
      error: null;
    };

export interface IGetTodoList {
  get(): Promise<HttpPayload<Todo[]>>;
}

export interface ICreateTodo {
  save(todo: Todo): Promise<HttpPayload<boolean>>;
}

export interface IUpdateTodo {
  update(todo: Todo): Promise<HttpPayload<boolean>>;
}

export interface IDeleteTodo {
  delete(id: Todo["id"]): Promise<HttpPayload<boolean>>;
}
