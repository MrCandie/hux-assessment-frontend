import PropTypes from "prop-types";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Slide = ({ children, y_axis_start = -300, y_axis_end = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "none",
        zIndex: 50,
      }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y_axis_start },
          visible: { opacity: 1, y: y_axis_end },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}>
        {children}
      </motion.div>
    </div>
  );
};

export default Slide;

Slide.propTypes = {
  y_axis_end: PropTypes.string,
  y_axis_start: PropTypes.string,
  children: PropTypes.element,
};
