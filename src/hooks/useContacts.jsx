import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { listContact } from "../utils/https";

export default function useContacts() {
  const [list, setList] = useState([]);
  const [progress, setProgress] = useState(0);

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    async function fetchData() {
      try {
        setProgress(20);
        setProgress(40);
        const res = await listContact(token);
        setList(res?.data);
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

  return { list, progress, setProgress };
}
