import { Link } from "react-router-dom";
import SlideX from "../../../animations/SlideX";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full  bg-[url('/hero.jpg')] bg-cover bg-center h-[95vh]">
      <div
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        className="w-full h-full flex items-start flex-col gap-4 justify-center p-4 lg:p-10">
        <SlideX direction="right">
          <h1
            style={{
              color:
                "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            }}
            className="font-extrabold text-[40px] lg:text-[60px] text-white flex">
            Your{" "}
            <motion.div
              animate={{
                scale: [0.8, 1],
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0.3,
              }}
              style={{ fontFamily: "Matemasie" }}
              className="text-[#ef4f51]">
              Mobile Book
            </motion.div>
          </h1>
        </SlideX>
        <SlideX direction="right">
          <p className="text-white font-medium w-full lg:w-[40%] text-base lg:text-[20px] leading-9">
            Mobile book is your ultimate mobile phone book directory, designed
            to help you stay connected with friends, family, and colleagues on
            the go.
          </p>
        </SlideX>
        <SlideX direction="right">
          <Link to="/login">
            <button
              style={{
                background:
                  "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,45,98,0.8632046568627451) 100%)",
              }}
              className="bg-[#ef4f51] p-4 lg:p-6 shadow-xl text-white font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
              Get Started
            </button>
          </Link>
        </SlideX>
      </div>
    </div>
  );
}
