import Rectangle84 from "./Img/Rectangle84.png";
import Tali from "./Img/tali.png";
import realtime from "./Img/realtime.png";
import Proof from "./Img/Proof.png";
import lonceng from "./Img/lonceng.png";
const Stage4 = () => {
  return (
    <div className="h-full w-full bg-[#F1F6FF]  ">
      <div
        className="md:bg-cover bg-auto bg-no-repeat md:-mt-[20%] -mt-[60%] pb-[10%]  "
        style={{
          backgroundImage: "url(" + Rectangle84 + ")",
        }}
      >
        <div className="md:py-[20%] py-[300px]">
          <div className="flex justify-center ">
            <h1
              className="w-[552px] h-[108px]  text-center text-[30px] 
            md:text-[40px] md:leading-[54px] text-white md:font-bold"
            >
              All in one proof for final mile delivery solutions
            </h1>
          </div>
          <div className="flex justify-center pt-[26px]">
            <div className="bg-white w-[84px] h-[4px] rounded-[15px]">
              &nbsp;
            </div>
          </div>
          <div className="flex justify-center md:py-[81px] pb-[300px] ">
            <div
              className="bg-no-repeat w-full h-[100px] bg-center"
              style={{
                backgroundImage: "url(" + Tali + ")",
              }}
            >
              <div className="flex justify-center pt-[20px]">
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[119px] text-white">
                  <div className="">
                    <div className="flex justify-center">
                      <img
                        src={realtime}
                        alt="realtime"
                        className="md:w-[96px] w-[80px]"
                      />
                    </div>
                    <div className="md:text-[27px] text-[20px] flex justify-center md:pt-[49px]">
                      Real-time tracking
                    </div>
                    <div className="text-[16px] text-center py-[8px] md:w-[292px] md:leading-[29px]">
                      By adopting real time delivery tracking software, final
                      mile delivery management has become easier
                    </div>
                  </div>
                  <div className="">
                    <div className="flex justify-center">
                      <img
                        src={Proof}
                        alt="Proof"
                        className="md:w-[115.7px] w-[80px]"
                      />
                    </div>
                    <div className="md:text-[27px] text-[20px] flex justify-center md:pt-[40px]">
                      Proof of Delivery
                    </div>
                    <div className="text-[16px] text-center py-[8px] md:w-[292px] md:leading-[29px]">
                      The system works with the electonic and digital signatures
                      of the reipient on reciving the delivery item
                    </div>
                  </div>
                  <div className="">
                    <div className="flex justify-center">
                      <img
                        src={lonceng}
                        alt="realtime"
                        className="md:w-[124.4px] w-[80px]"
                      />
                    </div>
                    <div className="md:text-[27px] text-[20px] flex justify-center md:pt-[49px]">
                      Real-time tracking
                    </div>
                    <div className="text-[16px] text-center py-[8px] md:w-[292px] md:leading-[29px]">
                      By adopting real time delivery tracking software, final
                      mile delivery management has become easier
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage4;
