import PropTypes from "prop-types";
import { listContact } from "../../../utils/https";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";

export default function Search({ setList }) {
  const token = useSelector((state) => state.auth.token);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  async function searchHandler(e) {
    try {
      if (!search) return;
      setLoading(true);
      const res = await listContact(token);

      const value = e.target.value?.toLowerCase()?.trim();
      const data = res?.data;
      const filtered = data?.filter(
        (el) =>
          el.firstName.includes(value) ||
          el.lastName.includes(value) ||
          el.email.includes(value)
      );
      setLoading(false);
      setList(filtered);
      setSearch("");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <div className="w-full flex items-center gap-4">
      <input
        type="search"
        id="search"
        placeholder="Search your contacts..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="outline-none bg-gray-100 rounded-md border w-full p-4 h-[60px]"
        required
      />
      <button
        onClick={searchHandler}
        className="bg-gray-300 p-4 h-[60px] w-[60px] flex items-center justify-center hober:opacity-80 rounded-md">
        {loading && (
          <div className="spinner">
            <ImSpinner2 />
          </div>
        )}
        {!loading && <BsSearch />}
      </button>
    </div>
  );
}

Search.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
