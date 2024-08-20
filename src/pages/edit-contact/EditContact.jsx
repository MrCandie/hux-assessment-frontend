import AppWrapper from "../../components/AppWrapper";
import Input from "../../components/Input";
import Select from "../../components/Select";

export default function EditContact() {
  return (
    <AppWrapper title="Edit Contact">
      <div className="w-full flex items-center jjustify-center h-full">
        <div className="w-full lg:w-[50%] bg-white justify-center mx-auto p-4 flex flex-col gap-4">
          <div className="w-full flex items-center gap-4 flex-col lg:flex-row">
            <Input label="First Name" placeholder="John" />
            <Input label="Last Name" placeholder="Doe" />
          </div>
          <Input label="Phone Number" placeholder="Enter phone number here" />
          <Input label="Email" placeholder="example@gmail.com" />
          <Input label="Birthday" type="date" />
          <Select label="Relationship" placeholder="Select relationship" />
          <button className="w-full bg-[#ef4f51] p-4 text-white font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
            Save
          </button>
        </div>
      </div>
    </AppWrapper>
  );
}
