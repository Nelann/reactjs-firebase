import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { loginWithGithub as loginWithGithubApi } from "@/service/authentication.service";

export const useGithubLogin = () => {
  const navigate = useNavigate();

  // GET (query)
  // POST, PUT, DELETE (mutation)

  const { mutate } = useMutation({
    mutationFn: async () => await loginWithGithubApi(),
    onSuccess: () => {
      navigate("/todos", { replace: true });
    },
  });

  return {
    loginWithGithub: mutate,
  };
};
