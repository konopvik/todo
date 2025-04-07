import { placeholderFetch } from "@/lib/placeholderFetch";

import { Todo } from "@/types/placeholder";

export const fetchAllUsersTodos = async (userId: number) => {
  const allUsersTodosEndpoint = `users/${userId}/todos`;

  if (!userId) {
    return;
  }

  try {
    const result = await placeholderFetch<Todo[]>(allUsersTodosEndpoint);

    return result;
  } catch (error) {
    throw new Error(`Error during fetching todos\n Info: ${error}`);
  }
};
