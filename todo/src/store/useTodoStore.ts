import { Todo } from "@/types/placeholder";
import { create } from "zustand";

interface TodosStoreState {
  todosData?: Todo[];
  isError: boolean;
  isLoading: boolean;
  setTodosData: (todosData?: Todo[]) => void;
  setError: (val: boolean) => void;
  setLoading: (val: boolean) => void;
  toggleTodo: (val: number) => void;
}

export const useTodosStore = create<TodosStoreState>(set => ({
  isError: false,
  isLoading: true,
  setError: (val: boolean) => set({ isError: val }),
  setLoading: (val: boolean) => set({ isLoading: val }),
  setTodosData: (data?: Todo[]) => set({ todosData: data }),
  toggleTodo: (id: number) =>
    set(state => ({
      todosData: state.todosData?.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
}));
