import PropTypes from "prop-types";
import SingleContact from "./SingleContact";

export default function ContactList({ list }) {
  return (
    <div className="w-full py-10 flex flex-col gap-4 bg-white p-4 h-full overflow-scroll">
      {list?.map((el, i) => (
        <SingleContact contact={el} key={i} />
      ))}
    </div>
  );
}

ContactList.propTypes = {
  list: PropTypes.array,
};
