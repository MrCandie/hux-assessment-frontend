import AuthWrapper from "../../components/AuthWrapper";
import Input from "../../components/Input";
import AuthButton from "../../components/AuthButton";
import { Link } from "react-router-dom";
import useRegister from "../../hooks/useRegister";
import AlertComponent from "../../components/Alert";
import Loader from "../../components/Loader";

export default function Register() {
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
  } = useRegister();

  return (
    <>
      <AlertComponent
        open={open}
        type={type}
        message={message}
        onClose={() => setOpen(false)}
      />
      <Loader progress={progress} setProgress={setProgress} />
      <AuthWrapper title="Register & Get Started">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-dtart gap-4">
          <Input
            label="Full Name"
            placeholder="john doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="Email"
            placeholder="example@gmail.com"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Input
            label="Password"
            type="password"
            placeholder="****"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <AuthButton title={loading ? "Loading..." : "Sign Up"} />
        </form>
        <Link to="/login">
          {`Already have an account?`}{" "}
          <span className="text-blue-600">Login</span>
        </Link>
      </AuthWrapper>
    </>
  );
}
