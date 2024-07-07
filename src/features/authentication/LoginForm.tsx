import { Button } from "../ui/Button";
import { CustomLink } from "../ui/CustomLink";

export const LoginForm = () => {
  return (
    <div className="rounded-sm bg-slate-800 p-8">
      <h2 className="mb-10 text-2xl font-medium text-slate-50">Login</h2>
      <form className="mb-8 flex flex-col gap-4">
        <div>asd</div>
        <div>asd</div>
        <Button type="submit">Login to your account</Button>
      </form>
      <span className="mb-8 block h-[1px] w-full bg-slate-700">&nbsp;</span>
      <p className="text-center text-slate-50">
        Don't have an account?{" "}
        <CustomLink to={""} type="inline">
          Sign up
        </CustomLink>
      </p>
    </div>
  );
};
