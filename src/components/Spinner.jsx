import { ImSpinner2 } from "react-icons/im";

export default function Spinner() {
  return (
    <div
      className="spinner"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <ImSpinner2 color="#2B2E72" size={30} />
    </div>
  );
}
