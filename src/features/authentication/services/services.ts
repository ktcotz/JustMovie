import { supabase } from "../../../lib/supabase/supabase";

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
    throw new Error(error.message);
  }

  return data;
};
