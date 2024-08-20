import AuthWrapper from "../../components/AuthWrapper";
import Input from "../../components/Input";
import AuthButton from "../../components/AuthButton";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <AuthWrapper title="Login & Continue the experience">
      <form className="w-full flex flex-col items-dtart gap-4">
        <Input label="Email" placeholder="example@gmail.com" type="email" />
        <Input label="Password" type="password" placeholder="****" />
        <AuthButton title="Login" />
      </form>
      <Link to="/register">
        {`Don't have an account?`}{" "}
        <span className="text-blue-600">Register</span>
      </Link>
    </AuthWrapper>
  );
}
