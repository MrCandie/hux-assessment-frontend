import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getContact } from "../utils/https";

export default function useContact() {
  const [contact, setContact] = useState("");

  const params = useParams();

  const [progress, setProgress] = useState(0);

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    async function fetchData() {
      try {
        setProgress(20);
        setProgress(40);
        const res = await getContact(token, params.id);
        setContact(res?.data);
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

  return { contact, setProgress, progress };
}
