import AuthWrapper from "../../components/AuthWrapper";
import Input from "../../components/Input";
import AuthButton from "../../components/AuthButton";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import AlertComponent from "../../components/Alert";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const {
    formData,
    setFormData,
    loading,
    progress,
    open,
    type,
    message,
    handleSubmit,
    setOpen,
    setProgress,
  } = useLogin();

  return (
    <>
      <AlertComponent
        open={open}
        type={type}
        message={message}
        onClose={() => setOpen(false)}
      />
      <Loader progress={progress} setProgress={setProgress} />
      <AuthWrapper title="Login & Continue the experience">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-start gap-4">
          <Input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            label="Email"
            placeholder="example@gmail.com"
            type="email"
          />
          <Input
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={formData.password}
            label="Password"
            type="password"
            placeholder="****"
          />
          <AuthButton title={loading ? "Loading..." : "Login"} />
        </form>
        <Link to="/register">
          {`Don't have an account?`}{" "}
          <span className="text-blue-600">Register</span>
        </Link>
      </AuthWrapper>
    </>
  );
}
