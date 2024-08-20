import React from "react";
import AppWrapper from "../../components/AppWrapper";
import ContactDetails from "./ContactDetails";

export default function ViewContact() {
  return (
    <AppWrapper title="View Contact">
      <div className="w-full flex items-center justify-center h-full">
        <div className="w-full lg:w-[50%] bg-white justify-center mx-auto p-4 flex flex-col gap-4">
          <ContactDetails />
        </div>
      </div>
    </AppWrapper>
  );
}
