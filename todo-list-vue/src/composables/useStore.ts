import { TodoList } from "../core/models/TodoList";
import { reactive } from "vue";

type AppStore = {
  todoList: TodoList;
  setTodoList: (newList: TodoList) => void;
};

export const store = reactive<AppStore>({
  todoList: TodoList.create([]),
  setTodoList: (newList: TodoList) => {
    store.todoList = newList;
  },
});
