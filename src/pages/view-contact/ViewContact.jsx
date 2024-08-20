import AppWrapper from "../../components/AppWrapper";
import ContactDetails from "./ContactDetails";
import Loader from "../../components/Loader";
import useContact from "../../hooks/useContact";

export default function ViewContact() {
  const { contact, setProgress, progress } = useContact();

  return (
    <>
      <Loader progress={progress} setProgress={setProgress} />
      <AppWrapper title="View Contact">
        <div className="w-full flex items-center justify-center h-full">
          <div className="w-full lg:w-[50%] bg-white justify-center mx-auto p-4 flex flex-col gap-4">
            <ContactDetails contact={contact} />
          </div>
        </div>
      </AppWrapper>
    </>
  );
}
