import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login as loginApi } from "@/service/authentication.service";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, password }) =>
      await loginApi({ email, password }),
    onSuccess: (data) => {
      const user = {
        disaplayName: data.displayName,
        email: data.email,
      };

      queryClient.setQueryData(["user"], user);

      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return {
    login: mutate,
    isPending,
  };
};
