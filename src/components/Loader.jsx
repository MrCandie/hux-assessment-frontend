import LoadingBar from "react-top-loading-bar";
import PropTypes from "prop-types";

export default function Loader({ setProgress, progress }) {
  return (
    <LoadingBar
      color="#ef4f51"
      progress={progress}
      height="6px"
      onLoaderFinished={() => setProgress(0)}
    />
  );
}

Loader.propTypes = {
  progress: PropTypes.number,
  setProgress: PropTypes.func,
};
