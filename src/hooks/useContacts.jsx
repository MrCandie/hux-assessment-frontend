import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { listContact } from "../utils/https";

export default function useContacts() {
  const [list, setList] = useState([]);
  const [progress, setProgress] = useState(0);
  const [search, setSearch] = useState("");

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    async function fetchData() {
      try {
        setProgress(20);
        setProgress(40);
        const res = await listContact(token);
        if (search) {
          const value = search?.toLowerCase()?.trim();
          const data = res?.data;
          const filtered = data?.filter(
            (el) =>
              el.firstName.includes(value) ||
              el.lastName.includes(value) ||
              el.email.includes(value)
          );
          setList(filtered);
        } else {
          setList(res?.data);
        }
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
  }, [token, search]);

  return { list, progress, setProgress, setSearch, search, setList };
}
