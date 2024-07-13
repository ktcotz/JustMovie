import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CustomError } from "../../../utils/CustomError";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { userLogout } from "../services/services";
import { useNavigate } from "react-router";
import { RouterRoutes } from "../../../types/routes";

export const useSignout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: signout,
    isPending: isSignoutLoading,
    error: signoutError,
  } = useMutation({
    mutationFn: userLogout,

    onSuccess: () => {
      navigate(RouterRoutes.LOGIN);
      queryClient.setQueriesData({ queryKey: ["user"] }, null);
    },

    onError: (error: CustomError) => {
      toast.error(t(error.generateError()));
    },
  });

  return { signout, isSignoutLoading, signoutError } as const;
};
