import { useStore } from "../hooks/useStore";
import { TodoListItem } from "./TodoListItem";

export function TodoListComponent() {
  const todoList = useStore((state) => state.todoList);

  return (
    <div className="">
      <div className="divide-y">
        {todoList.list.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}
