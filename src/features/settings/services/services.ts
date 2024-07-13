import { supabase, supabaseUrl } from "../../../lib/supabase/supabase";
import { CustomError } from "../../../utils/CustomError";

type UserDataCredentials = {
  name: string;
  surname: string;
};

type AvatarData = {
  avatarFile: File | null;
  bucket_default?: string;
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

export const getAllAvatars = async () => {
  const { data, error } = await supabase.storage
    .from("avatars")
    .list("default", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (error) {
    throw new CustomError({
      message: error.message,
    });
  }

  return data;
};

export const updateAvatar = async ({
  avatarFile,
  bucket_default,
}: AvatarData) => {
  if (bucket_default) {
    const { data: updatedUser, error: updateUserError } =
      await supabase.auth.updateUser({
        data: {
          avatar: `${bucket_default}`,
        },
      });

    if (updateUserError) {
      throw new CustomError({
        message: updateUserError.message,
        code: updateUserError.status,
      });
    }

    return updatedUser;
  }

  if (!avatarFile) return;

  const fileName = `avatar-${Math.random()}`;

  const { error } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatarFile);

  if (error) {
    throw new CustomError({
      message: error.message,
    });
  }

  const { data: updatedUser, error: updateUserError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (updateUserError) {
    throw new CustomError({
      message: updateUserError.message,
      code: updateUserError.status,
    });
  }

  return updatedUser;
};
