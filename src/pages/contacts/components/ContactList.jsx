import React from "react";
import SingleContact from "./SingleContact";

export default function ContactList() {
  return (
    <div className="w-full py-10 flex flex-col gap-4 bg-white p-4 h-full overflow-scroll">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, i) => (
        <SingleContact key={i} />
      ))}
    </div>
  );
}
