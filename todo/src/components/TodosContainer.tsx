import { useTodosStore } from "@/store/useTodoStore";
import type { FC } from "react";
import { TodoCard } from "./TodoCard";
import { Todo } from "@/types/placeholder";

interface TodosContainerProps {}

export const TodosContainer: FC<TodosContainerProps> = ({}) => {
  const { todosData, toggleTodo } = useTodosStore();

  return (
    <div className='flex flex-wrap justify-center w-full gap-6 py-3'>
      {todosData?.map((todo: Todo) => (
        <TodoCard
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          onToggle={() => toggleTodo(todo.id)}
        />
      ))}
    </div>
  );
};
