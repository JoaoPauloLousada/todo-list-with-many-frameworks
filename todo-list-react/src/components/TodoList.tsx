import { Todo } from "../core/models/Todo";
import { TodoList } from "../core/models/TodoList";
import { TodoListItem } from "./TodoListItem";

const list = TodoList.create([
  Todo.create({ text: "todo one" }),
  Todo.create({ text: "second todo" }),
  Todo.create({ text: "another todo", completed: true }),
]);

export function TodoListComponent() {
  return (
    <div className="">
      <div className="divide-y">
        {list.list.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}
