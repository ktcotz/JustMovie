import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../services/services";
import { CustomError } from "../../../utils/CustomError";
import { useNavigate } from "react-router";
import { RouterRoutes } from "../../../types/routes";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isPending: isLogin,
    error: loginError,
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: (user) => {
      queryClient.setQueriesData(
        {
          queryKey: ["user"],
        },
        user.user,
      );
      navigate(RouterRoutes.DASHBOARD);
    },

    onError: (error: CustomError) => {
      return error;
    },
  });

  return { login, isLogin, loginError } as const;
};
