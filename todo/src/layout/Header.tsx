import { fetchAllTodos } from "@/services/fetchAllTodos";
import { useTodosStore } from "@/store/useTodoStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, type FC } from "react";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchAllTodos(),
  });

  const { setLoading, setTodosData } = useTodosStore();

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (data) {
      setTodosData(data);
      return;
    }
    setTodosData(undefined);
  }, [data, isLoading]);

  return (
    <div>
      <div className='text-red-500 text-center'>TODO List</div>
      {isLoading && <h1>LOADING</h1>}
    </div>
  );
};
