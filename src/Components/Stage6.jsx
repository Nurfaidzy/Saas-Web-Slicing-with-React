import back from "./Img/bforefooter.png";
import iconplay from "./Img/iconplay.png";
import { motion } from "framer-motion";
const Stage6 = () => {
  return (
    <motion.div
      className="md:bg-cover bg-auto bg-no-repeat"
      style={{
        backgroundImage: "url(" + back + ")",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="md:px-[167px] py-[180px] text-white"
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="md:font-bold text-[30px] text-center md:text-[40px] md:w-[515px] md:leading-[61px] ">
          Advanced Fleet Tracking Solution Tracker
        </div>
        <div className="py-[25px]">
          <ol className="md:flex px-[20px]">
            <li className="bg-[#F48C06] py-[17px] px-[40px] rounded-[15px] text-[21px]">
              Get Started
            </li>
            <li className="flex justify-center md:justify-start md:pl-[34px]">
              <div className="py-[15px]">
                <img src={iconplay} alt="iconplay" />
              </div>
              <div className="pl-[13.7px] py-[18px] text-[21px]">
                Watch how it works
              </div>
            </li>
          </ol>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Stage6;
