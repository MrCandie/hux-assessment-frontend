import React from "react";

export default function Search() {
  return (
    <form className="w-full">
      <input
        type="search"
        id="search"
        placeholder="Search your contacts..."
        // value={value}
        // onChange={onChange}
        className="outline-none bg-gray-100 rounded-md border w-full p-4"
        required
      />
    </form>
  );
}
