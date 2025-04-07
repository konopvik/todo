import { fetchAllTodos } from "@/services/fetchAllTodos";
import { Todo } from "@/types/placeholder";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type FC } from "react";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchAllTodos(),
  });

  useEffect(() => {
    if (data) {
      setTodos(data);
      return;
    }

    setTodos([]);
  }, [data]);

  console.log(todos);

  return <div className='text-red-500 text-center'>TODO List</div>;
};
