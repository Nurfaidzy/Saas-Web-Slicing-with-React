import Rectangle from "./Img/Rectangle236.png";
import Group5445 from "./Img/Group5445.png";
import { motion } from "framer-motion";
const Stage3 = () => {
  return (
    <div className="md:h-full md:w-full  ">
      <div
        className="bg-cover bg-no-repeat  "
        style={{
          backgroundImage: "url(" + Rectangle + ")",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:py-[500px] py-[200px]"
        >
          <div className="md:text-[40px] text-[20px] text-center text-[#2E526B] font-bold">
            Delivery Business Interfaces
          </div>
          <div className="flex justify-center pt-[26px]">
            <div className="bg-[#5752DA] w-[84px] h-[4px] rounded-[15px]">
              &nbsp;
            </div>
          </div>
          <div className="flex justify-center">
            <div className="md:flex md:justify-center grid grid-cols-1 text-center w-[300px] gap-[18px] pt-[48px]">
              <div className="py-[32px] px-[40px] bg-[#37C8DC] rounded-[15px] text-[21px] text-white">
                Dasboard
              </div>
              <div className="py-[17px] px-[40px] rounded-[20px] text-[21px] text-[#2E526B]  border-2">
                Custumer App
              </div>
              <div className="py-[17px] px-[40px] rounded-[20px] text-[21px] text-[#2E526B]  border-2">
                Agent App
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-[44px] ">
            <img src={Group5445} alt="Group5445" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stage3;
