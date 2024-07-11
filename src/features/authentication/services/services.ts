import { supabase } from "../../../lib/supabase/supabase";
import { CustomError } from "../../../utils/CustomError";

type UserRegisterCredentials = {
  email: string;
  password: string;
};

export const registerUser = async ({
  email,
  password,
}: UserRegisterCredentials) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new CustomError({
      message: error.message,
      code: error.status,
    });
  }

  return data;
};
