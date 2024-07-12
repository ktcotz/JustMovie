import { useMutation } from "@tanstack/react-query";
import { CustomError } from "../../../utils/CustomError";
import { updatePassword } from "../services/services";
import { useNavigate } from "react-router";
import { RouterRoutes } from "../../../types/routes";

export const useUpdateUserPassword = () => {
  const navigate = useNavigate();

  const {
    mutate: update,
    isPending: isUpdating,
    error: updateError,
  } = useMutation({
    mutationFn: updatePassword,

    onSuccess: () => {
      navigate(RouterRoutes.LOGIN);
    },

    onError: (error: CustomError) => {
      return error;
    },
  });

  return { update, isUpdating, updateError } as const;
};
