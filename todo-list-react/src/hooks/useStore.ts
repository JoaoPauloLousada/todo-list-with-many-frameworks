import { create } from "zustand";
import { TodoList } from "../core/models/TodoList";

type AppStore = {
  todoList: TodoList;
  setTodoList: (newList: TodoList) => void;
};

export const useStore = create<AppStore>((set) => ({
  todoList: TodoList.create([]),
  setTodoList: (newList: TodoList) => set(() => ({ todoList: newList })),
}));
