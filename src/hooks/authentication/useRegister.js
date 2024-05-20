import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { register as registerApi } from "@/service/authentication.service";

export const useRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, password }) =>
      await registerApi({ email, password }),
    onSuccess: (data, variables, context) => {
      console.log(data);
      console.log(variables);
      console.log(context);

      navigate("/login", { replace: true });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return {
    register: mutate,
    isPending,
  };
};
