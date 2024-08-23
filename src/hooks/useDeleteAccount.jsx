import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProfile } from "../utils/https";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../redux/AuthSlice";

export default function useDeleteAccount(name) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [value, setValue] = useState("");

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (value !== name) return;
    try {
      setLoading(true);
      setProgress(20);
      setProgress(40);
      await deleteProfile(token);
      dispatch(deleteToken());
      alert("Account deleted");
      navigate(`/register`);
      window.location.reload();

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
