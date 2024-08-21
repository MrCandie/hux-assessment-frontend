import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { createContact } from "../utils/https";
import { useSelector } from "react-redux";

export default function useCreateContact() {
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

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.phone) {
      setType("warning");
      setMessage("First name, last name and phone number are required!");
      setOpen(true);
      return;
    }

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

      await createContact(token, formData);
      setType("success");
      setMessage("Contact created");
      setOpen(true);

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
