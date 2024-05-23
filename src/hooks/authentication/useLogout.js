import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { logout as logoutApi } from "@/service/authentication.service";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => await logoutApi(),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"] });
      navigate("/login", { replace: true });
    },
  });

  return {
    logout: mutate,
    isPending,
  };
};
