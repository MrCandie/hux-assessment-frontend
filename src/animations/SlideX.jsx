import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

const SlideX = ({
  children,
  x_axis_start = 300,
  x_axis_end = 0,
  direction,
}) => {
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
      className="ele-container w-full"
      style={{
        overflowX: "hidden",
        width: "100%",
        zIndex: 40,
      }}>
      <motion.div
        style={{ width: "100%" }}
        variants={{
          hidden: {
            opacity: 0,
            x: direction === "right" ? -x_axis_start : x_axis_start,
          },
          visible: {
            opacity: 1,
            x: direction === "right" ? -x_axis_end : x_axis_end,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}>
        {children}
      </motion.div>
    </div>
  );
};

export default SlideX;

SlideX.propTypes = {
  x_axis_end: PropTypes.string,
  x_axis_start: PropTypes.string,
  children: PropTypes.element,
  direction: PropTypes.string,
};
