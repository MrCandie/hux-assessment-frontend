import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateProfile, viewProfile } from "../utils/https";

export default function useProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    createdAt: "",
  });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    async function fetchData() {
      try {
        setProgress(20);
        setProgress(40);
        const res = await viewProfile(token);
        setFormData({
          name: res?.data?.name,
          email: res?.data?.email,
          createdAt: res?.data?.createdAt,
        });
        setProgress(60);
        setProgress(80);
        setProgress(100);
      } catch (error) {
        setProgress(80);
        setProgress(100);
        console.log(error);
      }
    }
    fetchData();
  }, [token]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setProgress(20);
      setProgress(40);

      const res = await updateProfile(token, { name: formData.name });
      setType("success");
      setMessage("Contact updated");
      setOpen(true);

      setFormData({
        name: res?.data?.name,
        email: res?.data?.email,
        createdAt: res?.data?.createdAt,
      });

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
    setProgress,
    progress,
    open,
    type,
    loading,
    setFormData,
    handleSubmit,
    setOpen,
    message,
  };
}
