import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProfile } from "../utils/https";
import { useSelector } from "react-redux";

export default function useDeleteAccount(name) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [value, setValue] = useState("");

  const token = useSelector((state) => state.auth.token);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (value !== name) return;
    try {
      setLoading(true);
      setProgress(20);
      setProgress(40);
      await deleteProfile(token);
      alert("Account deleted");
      navigate(`/register`);

      setProgress(60);
      setProgress(80);
      setProgress(100);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(`${error?.response?.data.message || "something went wrong"}`);
      setProgress(60);
      setProgress(80);
      setProgress(100);
      console.log(error);
    }
  }

  return {
    loading,
    progress,
    open,
    handleSubmit,
    setProgress,
    value,
    setValue,
  };
}
