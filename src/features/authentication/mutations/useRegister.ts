import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/services";
import { CustomError } from "../../../utils/CustomError";
import { useNavigate } from "react-router";
import { RouterRoutes } from "../../../types/routes";

export const useRegister = () => {
  const navigate = useNavigate();

  const {
    mutate: signup,
    isPending: isRegistering,
    error: signupError,
  } = useMutation({
    mutationKey: ["signup"],
    mutationFn: registerUser,
    onSuccess: () => {
      navigate(RouterRoutes.LOGIN);
    },

    onError: (error: CustomError) => {
      return error;
    },
  });

  return { signup, isRegistering, signupError } as const;
};
