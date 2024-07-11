import { supabase } from "../../../lib/supabase/supabase";
import { CustomError } from "../../../utils/CustomError";

type UserCredentials = {
  email: string;
  password: string;
};

export const registerUser = async ({ email, password }: UserCredentials) => {
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

export const loginUser = async ({ email, password }: UserCredentials) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log({
      message: error.message,
      code: error.status,
    });

    throw new CustomError({
      message: error.message,
      code: error.status,
    });
  }

  return data;
};

export const getUser = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    throw new CustomError({
      message: error.message,
      code: error.status,
    });
  }

  const user = data.session?.user;

  return user;
};
