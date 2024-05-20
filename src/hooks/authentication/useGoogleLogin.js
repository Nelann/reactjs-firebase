import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { loginWithGoogle as loginWithGoogleApi } from "@/service/authentication.service";

export const useGoogleLogin = () => {
  const navigate = useNavigate();

  // GET (query)
  // POST, PUT, DELETE (mutation)

  const { mutate } = useMutation({
    mutationFn: async () => await loginWithGoogleApi(),
    onSuccess: () => {
      navigate("/todos", { replace: true });
    },
  });

  return {
    loginWithGoogle: mutate,
  };
};
