import AppWrapper from "../../components/AppWrapper";
import Search from "./components/Search";
import ContactList from "./components/ContactList";
import useContacts from "../../hooks/useContacts";
import Loader from "../../components/Loader";
import EmptyState from "../../components/EmptyState";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Contact() {
  const { list, progress, setProgress, setList } = useContacts();
  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (!isAuth) navigate("/");
  }, [isAuth, navigate]);

  return (
    <>
      <Loader progress={progress} setProgress={setProgress} />
      <AppWrapper show={false} title="Contacts">
        <div className="w-full p-4 flex flex-col gap-10 pb-4 overflow-scroll h-full">
          <Search list={list} setList={setList} />
          <div className="w-full rounded-md flex items-start justify-center gap-4 flex-wrap overflow-scroll">
            <h2 className="text-base lg:text-[18px] font-bold text-[#333] text-start">
              My contacts
            </h2>
            {list?.length > 0 ? (
              <ContactList list={list} />
            ) : (
              <EmptyState
                title="You currently have no contact"
                icon={<AiOutlinePlus />}
                onClick={() => navigate("/contact/create")}
              />
            )}
          </div>
        </div>
      </AppWrapper>
    </>
  );
}
