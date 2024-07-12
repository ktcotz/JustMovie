import { useMutation } from "@tanstack/react-query";
import { CustomError } from "../../../utils/CustomError";
import { forgotPassword } from "../services/services";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const useForgotPassword = () => {
  const { t } = useTranslation();

  const {
    mutate: forgot,
    isPending: isForgotLoading,
    error: forgotError,
  } = useMutation({
    mutationFn: forgotPassword,

    onSuccess: () => {
      toast.success("Sprawdź skrzynkę pocztową i podążaj za krokami!");
    },

    onError: (error: CustomError) => {
      return error;
    },
  });

  return { forgot, isForgotLoading, forgotError } as const;
};
