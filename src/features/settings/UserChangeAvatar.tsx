import { useDropzone } from "react-dropzone";
import { useGetUser } from "../authentication/mutations/useGetUser";
import { Spinner } from "../ui/Spinner";
import { useState } from "react";
import { Button } from "../ui/Button";

export const UserChangeAvatar = () => {
  const { user, isLoading } = useGetUser();

  const [preview, setPreview] = useState<string | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (files: File[]) => {
      const file = URL.createObjectURL(files[0]);
      setPreview(file);
    },
  });

  console.log(preview);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <h2>Zmień avatar</h2>
      <section className="relative flex items-center justify-center rounded-md bg-slate-900 p-8 text-slate-300">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag'n drop avatar image</p>
        </div>
        <aside className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <img
            src={preview || user?.user_metadata?.avatar}
            alt="User avatar"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full border-2 border-slate-50"
          />
        </aside>
      </section>
      {preview && (
        <div className="flex items-center justify-center gap-4">
          <Button onClick={() => setPreview(null)} modifier="settings">
            Nie zapisuj
          </Button>
          <Button modifier="settings">Ustaw zdjęcie</Button>
        </div>
      )}
    </>
  );
};
