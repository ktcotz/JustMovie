import { supabase } from "../../../lib/supabase/supabase";
import { RouterRoutes } from "../../../types/routes";
import { CustomError } from "../../../utils/CustomError";

type UserCredentials = {
  email: string;
  password: string;
};

export const registerUser = async ({ email, password }: UserCredentials) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: "",
        surname: "",
        avatar:
          "https://lcibdfunhrzjmuytpeyq.supabase.co/storage/v1/object/sign/avatars/user.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3VzZXIucG5nIiwiaWF0IjoxNzIwODg4MzU1LCJleHAiOjE3NTI0MjQzNTV9.OVqMdjQEYTw74jMLd_5eQ5ECPGRKOtMFFIclD6Elu6A&t=2024-07-13T16%3A32%3A35.333Z",
      },
    },
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

  return user || null;
};

export const forgotPassword = async ({
  email,
}: Pick<UserCredentials, "email">) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `http://localhost:5173${RouterRoutes.RESET_PASSWORD}`,
  });

  if (error) {
    throw new CustomError({
      message: error.message,
      code: error.status,
    });
  }

  return data;
};

export const updatePassword = async ({
  password,
}: Pick<UserCredentials, "password">) => {
  const { data, error } = await supabase.auth.updateUser({
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

export const userLogout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new CustomError({
      message: error.message,
      code: error.status,
    });
  }
};
