import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import validator from "validator";
import { getContact, updateContact } from "../utils/https";
import { useSelector } from "react-redux";

export default function useEditContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    birthday: "",
    relationship: "",
  });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const token = useSelector((state) => state.auth.token);

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setProgress(20);
        setProgress(40);
        const res = await getContact(token, params.id);
        const data = res?.data;
        setFormData({
          firstName: data?.firstName,
          lastName: data?.lastName,
          email: data?.email,
          phone: data?.phone,
          relationship: data?.relationship,
          birthday: data?.birthday,
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
  }, [token, params]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.email && !validator.isEmail(formData.email)) {
      setType("warning");
      setMessage("Invalid email address!");
      setOpen(true);
      return;
    }

    try {
      setLoading(true);
      setProgress(20);
      setProgress(40);

      await updateContact(token, params.id, formData);
      setType("success");
      setMessage("Contact updated");
      setOpen(true);

      navigate(`/contact/${params?.id}`);

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
