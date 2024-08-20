import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PropTypes from "prop-types";

export default function Image({ src, alt, fit, height, borderRadius }) {
  const obj = {
    height: height,
    objectFit: fit ? fit : "cover",
    borderRadius: borderRadius,
  };
  return (
    <>
      <LazyLoadImage
        alt={alt}
        className="gallery-img"
        effect="blur"
        // placeholderSrc="/logo-green.png"
        src={src}
        width="100%"
        style={obj}
      />
    </>
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  fit: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
};
