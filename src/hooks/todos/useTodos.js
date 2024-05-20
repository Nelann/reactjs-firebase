import { getAllTodos } from "@/service/todos.service";
import { useQuery } from "@tanstack/react-query";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => await getAllTodos(),
  });
};
