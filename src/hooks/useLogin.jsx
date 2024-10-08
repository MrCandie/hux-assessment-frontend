import { useState } from "react";
import { login } from "../utils/https";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { useDispatch } from "react-redux";
import { storeToken } from "../redux/AuthSlice";

export default function useLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setType("warning");
      setMessage("Email and password are required!");
      setOpen(true);
      return;
    }

    if (!validator.isEmail(formData.email)) {
      setType("warning");
      setMessage("Invalid email address!");
      setOpen(true);
      return;
    }

    try {
      setLoading(true);
      setProgress(20);
      setProgress(40);

      const res = await login(formData);
      setType("success");
      setMessage("Login successful");
      setOpen(true);

      dispatch(storeToken(res.token));

      navigate("/contact");

      setProgress(60);
      setProgress(80);
      setProgress(100);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setType("error");
      setOpen(true);
      setMessage(`${error?.response?.data.message || "something went wrong"}`);
      setProgress(60);
      setProgress(80);
      setProgress(100);
    }
  }

  return {
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
  };
}
