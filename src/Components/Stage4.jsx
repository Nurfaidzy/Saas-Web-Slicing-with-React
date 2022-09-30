import Rectangle84 from "./Img/Rectangle84.png";
import Tali from "./Img/tali.png";
import realtime from "./Img/realtime.png";
import Proof from "./Img/Proof.png";
import lonceng from "./Img/lonceng.png";
const Stage4 = () => {
  return (
    <div className="h-full w-full bg-[#F1F6FF]  ">
      <div
        className="bg-cover bg-no-repeat -mt-[20%] pb-[10%] "
        style={{
          backgroundImage: "url(" + Rectangle84 + ")",
        }}
      >
        <div className="py-[20%]">
          <div className="flex justify-center ">
            <h1 className="w-[552px] h-[108px] text-center text-[40px] leading-[54px] text-white font-bold">
              All in one proof for final mile delivery solutions
            </h1>
          </div>
          <div className="flex justify-center pt-[26px]">
            <div className="bg-white w-[84px] h-[4px] rounded-[15px]">
              &nbsp;
            </div>
          </div>
          <div className="flex justify-center py-[81px] ">
            <div
              className="bg-no-repeat w-full h-[100px] bg-center"
              style={{
                backgroundImage: "url(" + Tali + ")",
              }}
            >
              <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-[119px] text-white">
                  <div className="">
                    <div className="flex justify-center">
                      <img src={realtime} alt="realtime" className="w-[96px]" />
                    </div>
                    <div className="text-[27px] flex justify-center pt-[49px]">
                      Real-time tracking
                    </div>
                    <div className="text-[16px] text-center py-[8px] w-[292px] leading-[29px]">
                      By adopting real time delivery tracking software, final
                      mile delivery management has become easier
                    </div>
                  </div>
                  <div className="">
                    <div className="flex justify-center">
                      <img src={Proof} alt="Proof" className="w-[115.7px]" />
                    </div>
                    <div className="text-[27px] flex justify-center pt-[40px]">
                      Proof of Delivery
                    </div>
                    <div className="text-[16px] text-center py-[8px] w-[292px] leading-[29px]">
                      The system works with the electonic and digital signatures
                      of the reipient on reciving the delivery item
                    </div>
                  </div>
                  <div className="">
                    <div className="flex justify-center">
                      <img
                        src={lonceng}
                        alt="realtime"
                        className="w-[124.4px]"
                      />
                    </div>
                    <div className="text-[27px] flex justify-center pt-[49px]">
                      Real-time tracking
                    </div>
                    <div className="text-[16px] text-center py-[8px] w-[292px] leading-[29px]">
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
