import Logosbrand from "./Img/Logosbrand.png";
import Grocery from "./Img/Grocery.png";
import Food from "./Img/Food.png";
import Courier from "./Img/Courier.png";
import Logistics from "./Img/Logistics.png";
import { motion } from "framer-motion";
const Stage2 = () => {
  return (
    <div className=" flex justify-center md:-mt-[4%]">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center">
          <img className=" rounded-[50px]" src={Logosbrand} alt="Logosbrand" />
        </div>
        <div className="md:pt-[60px] pt-[40px]">
          <div className="md:text-[40px] text-[30px] text-center text-[#2E526B] font-bold">
            Solutions for every delivery
          </div>
          <div className="flex justify-center pt-[26px]">
            <div className=" bg-[#5752DA] w-[84px] h-[4px] rounded-[15px]">
              &nbsp;
            </div>
          </div>
          <div className="grid md:grid-cols-4  grid-cols-1 pt-[75px] gap-[36px]">
            <div className="flex justify-center">
              <div className="bg-[#5752DA] md:rounded-[25px] rounded-[20px]">
                <div className="w-[286px] hover:-mt-[10px] hover:shadow-2xl bg-white h-[327px] py-[45px] px-[25px] rounded-[20px] border-[#DCE2EE]/20 border-2">
                  <div className="flex justify-center">
                    <img src={Food} alt="food" className="w-[83px] h-[59px]" />
                  </div>
                  <div className="py-[35px]">
                    <h1 className="text-[27px] text-center text-[#2E526B]">
                      Food
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-[#2E526B]/80 text-center leading-[32px]">
                      Leverange agile frameworks provide a robust synopsis high
                      level overviews.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-[#5752DA] md:rounded-[25px] rounded-[20px]">
                <div className="w-[286px] hover:-mt-[10px] hover:shadow-2xl bg-white h-[327px] py-[45px] px-[25px] rounded-[20px] border-[#DCE2EE]/20 border-2">
                  <div className="flex justify-center">
                    <img
                      src={Grocery}
                      alt="food"
                      className="w-[83px] h-[57.05px]"
                    />
                  </div>
                  <div className="py-[35px]">
                    <h1 className="text-[27px] text-center text-[#2E526B]">
                      Grocery
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-[#2E526B]/80 text-center leading-[32px]">
                      Bring to the table win-win survivall strategies to ensure
                      proactive domination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-[#5752DA] md:rounded-[25px] rounded-[20px]">
                <div className="w-[286px] hover:-mt-[10px] hover:shadow-2xl bg-white h-[327px] py-[45px] px-[25px] rounded-[20px] border-[#DCE2EE]/20 border-2">
                  <div className="flex justify-center">
                    <img
                      src={Courier}
                      alt="food"
                      className="w-[83px] h-[47.91px]"
                    />
                  </div>
                  <div className="py-[35px]">
                    <h1 className="text-[27px] text-center text-[#2E526B]">
                      Courier
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-[#2E526B]/80 text-center leading-[32px]">
                      Organicaly grow the holls world view of disruptive
                      innovation via workplace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-[#5752DA] md:rounded-[25px] rounded-[20px]">
                <div className="w-[286px] hover:-mt-[10px] hover:shadow-2xl bg-white h-[327px] py-[45px] px-[25px] rounded-[20px] border-[#DCE2EE]/20 border-2">
                  <div className="flex justify-center">
                    <img
                      src={Logistics}
                      alt="food"
                      className="w-[91px] h-[60px]"
                    />
                  </div>
                  <div className="py-[35px]">
                    <h1 className="text-[27px] text-center text-[#2E526B]">
                      Logistics
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-[#2E526B]/80 text-center leading-[32px]">
                      Nanotechnology immers along the information highway will
                      close the loop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Stage2;
