import { Button } from "../ui/Button";
import { CustomLink } from "../ui/CustomLink";

export const LoginForm = () => {
  return (
    <div className="rounded-sm bg-slate-800 p-8">
      <h2 className="mb-10 text-2xl font-medium text-slate-50">Login</h2>
      <form className="mb-8 flex flex-col">
        <div className="mb-8 flex flex-col gap-4">
          <div className="relative">
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                required
                className="peer w-full rounded-md bg-slate-700 p-4 text-slate-50 transition-all focus:outline-none focus:ring focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-800"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-1/2 -translate-y-1/2 px-2 text-slate-300 transition-all peer-valid:left-4 peer-valid:top-0 peer-valid:rounded-md peer-valid:bg-slate-700 peer-valid:text-slate-50 peer-focus:left-4 peer-focus:top-0 peer-focus:rounded-md peer-focus:bg-slate-700 peer-focus:px-2 peer-focus:text-slate-50"
              >
                Email address
              </label>
            </div>
            <p className="ml-2 mt-2 text-sm text-red-400">Error</p>
          </div>
          <div className="relative">
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                required
                className="peer w-full rounded-md bg-slate-700 p-4 text-slate-50 transition-all focus:outline-none focus:ring focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-800"
              />
              <label
                htmlFor="password"
                className="absolute left-0 top-1/2 -translate-y-1/2 px-2 text-slate-300 transition-all peer-valid:left-4 peer-valid:top-0 peer-valid:rounded-md peer-valid:bg-slate-700 peer-valid:text-slate-50 peer-focus:left-4 peer-focus:top-0 peer-focus:rounded-md peer-focus:bg-slate-700 peer-focus:px-2 peer-focus:text-slate-50"
              >
                Password
              </label>
            </div>
          </div>
        </div>
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
