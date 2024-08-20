import AppWrapper from "../../components/AppWrapper";
import Search from "./components/Search";
import ContactList from "./components/ContactList";

export default function Contact() {
  return (
    <AppWrapper title="Contacts">
      <div className="w-full p-4 flex flex-col gap-10 pb-4 overflow-scroll h-full">
        <Search />

        <div className="w-full rounded-md flex items-start justify-center gap-4 flex-wrap overflow-scroll">
          <h2 className="text-base lg:text-[18px] font-bold text-[#333] text-start">
            My contacts
          </h2>
          <ContactList />
        </div>
      </div>
    </AppWrapper>
  );
}
