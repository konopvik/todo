import { placeholderFetch } from "@/lib/placeholderFetch";

import { Todo } from "@/types/placeholder";

export const fetchAllTodos = async () => {
  const allTodosEndpoint = `/todos`;

  try {
    const result = placeholderFetch<Todo[]>(allTodosEndpoint);

    return result;
  } catch (error) {
    throw new Error(`Error during fetching todos\n Info: ${error}`);
  }
};
