import AppWrapper from "../../components/AppWrapper";
import Input from "../../components/Input";

export default function Profile() {
  return (
    <AppWrapper title="Profile">
      <div className="w-full flex items-center justify-center h-full">
        <div className="w-full lg:w-[50%] bg-white justify-center mx-auto p-4 flex flex-col gap-4">
          <Input label="First Name" />
          <Input label="Last Name" />
          <Input label="Email" />
          <div className="w-full flex items-end justify-end">
            <button className="text-[#ef4f51] p-2  font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
}
