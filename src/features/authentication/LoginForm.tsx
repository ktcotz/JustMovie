import { CustomLink } from "../ui/CustomLink";
import { Form } from "../ui/form/Form";

export const LoginForm = () => {
  return (
    <div className="rounded-sm bg-slate-800 p-8">
      <h2 className="mb-10 text-2xl font-medium text-slate-50">Login</h2>
      <Form>
        <Form.Item>
          <Form.InputContainer>
            <Form.Input id="email" name="email" required type="text" />
            <Form.Label id="email">Email address</Form.Label>
          </Form.InputContainer>
          <Form.Error>Error with invalid name!</Form.Error>
        </Form.Item>
        <Form.Item>
          <Form.InputContainer>
            <Form.Input
              id="password"
              name="password"
              required
              type="password"
            />
            <Form.Label id="password">Password</Form.Label>
          </Form.InputContainer>
          <Form.Error>Error with invalid name!</Form.Error>
        </Form.Item>
        <Form.Submit>Login to your account</Form.Submit>
      </Form>
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
