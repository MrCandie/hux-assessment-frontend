import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../utils/https";
import { useSelector } from "react-redux";

export default function useDeleteContact(id) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const token = useSelector((state) => state.auth.token);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setProgress(20);
      setProgress(40);

      await deleteContact(token, id);
      setType("success");
      setMessage("Contact deleted");
      setOpen(true);

      navigate(`/contact`);

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
