import { supabase } from "../../../lib/supabase/supabase";
import { CustomError } from "../../../utils/CustomError";

type UserDataCredentials = {
  name: string;
  surname: string;
};

export const updateUserName = async ({
  name,
  surname,
}: UserDataCredentials) => {
  const { data, error } = await supabase.auth.updateUser({
    data: { name, surname },
  });

  if (error) {
    throw new CustomError({
      message: error.message,
      code: error.status,
    });
  }

  return data;
};
