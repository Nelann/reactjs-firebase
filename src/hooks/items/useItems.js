import { useQuery } from "@tanstack/react-query";

import { getAllItems } from "../../service/items.service";

export const useItems = () => {
  const {
    data: items,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["items"],
    queryFn: async () => await getAllItems(),
  });

  return { items, isLoading, error };
};
