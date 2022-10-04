import frame from "./Img/Frame.png";
import kurang from "./Img/kurang.png";
import tambah from "./Img/tambah.png";
import { motion } from "framer-motion";
const Stage5 = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#F1F6FF] ">
        <div className="flex justify-center">
          <img src={frame} alt="frame" />
        </div>
        <div className="text-center py-[11px] md:text-[40px] text-[20px] text-[#2E526B] font-bold">
          Frequently Askey Questions
        </div>
        <div className="flex justify-center md:pt-[26px]">
          <div className="bg-[#5752DA] w-[84px] h-[4px] rounded-[15px]">
            &nbsp;
          </div>
        </div>
        <div className="flex justify-center md:py-[83px] py-[30px]">
          <div className="bg-white rounded-[20px] w-[1251px] ">
            <div className="py-[43px] px-[46px] flex justify-between">
              <div className="md:pt-[1%] pt-[15px] ">
                <img src={kurang} className="w-[50px]" alt="kurang" />
              </div>
              <div className="pl-[3%] ">
                <div className="text-[#2E526B] text-[20px] font-bold">
                  What is SaaS
                </div>
                <div className="md:leading-[47px] text-[18px] text-[#2E526B]/80 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus sint veritatis eius, deleniti id nulla, sunt ut
                  neque, quisquam repellat reprehenderit expedita tempore
                  voluptates. Distinctio recusandae nobis delectus error eaque?
                </div>
              </div>
            </div>
            <hr />
            <div className="py-[43px] px-[46px] flex ">
              <div className="md:pt-[1%] pt-[10px] ">
                <img src={tambah} alt="tambah" className="w-[17px] " />
              </div>
              <div className="pl-[3%] ">
                <div className="text-[#2E526B] text-[20px] font-bold">
                  <div className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="py-[43px] px-[46px] flex ">
              <div className="md:pt-[1%] pt-[10px] ">
                <img src={tambah} alt="tambah" className="w-[17px] " />
              </div>
              <div className="pl-[3%] ">
                <div className="text-[#2E526B] text-[20px] font-bold">
                  <div className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="py-[43px] px-[46px] flex ">
              <div className="md:pt-[1%] pt-[10px] ">
                <img src={tambah} alt="tambah" className="w-[17px] " />
              </div>
              <div className="pl-[3%] ">
                <div className="text-[#2E526B] text-[20px] font-bold">
                  <div className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="py-[43px] px-[46px] flex ">
              <div className="md:pt-[1%] pt-[10px] ">
                <img src={tambah} alt="tambah" className="w-[17px] " />
              </div>
              <div className="pl-[3%] ">
                <div className="text-[#2E526B] text-[20px] font-bold">
                  <div className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stage5;
