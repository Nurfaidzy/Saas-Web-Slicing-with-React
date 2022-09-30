import Rectangle from "./Img/Rectangle236.png";
import Group5445 from "./Img/Group5445.png";
const Stage3 = () => {
  return (
    <div className="h-full w-full  ">
      <div
        className="bg-cover  bg-no-repeat  "
        style={{
          backgroundImage: "url(" + Rectangle + ")",
        }}
      >
        <div className="py-[500px]">
          <div className="text-[40px] text-center text-[#2E526B] font-bold">
            Delivery Business Interfaces
          </div>
          <div className="flex justify-center pt-[26px]">
            <div className="bg-[#5752DA] w-[84px] h-[4px] rounded-[15px]">
              &nbsp;
            </div>
          </div>
          <div className="flex justify-center gap-[18px] pt-[48px]">
            <div className="py-[17px] px-[40px] bg-[#37C8DC] rounded-[15px] text-[21px] text-white">
              Dasboard
            </div>
            <div className="py-[17px] px-[40px] rounded-[20px] text-[21px] text-[#2E526B]  border-2">
              Custumer App
            </div>
            <div className="py-[17px] px-[40px] rounded-[20px] text-[21px] text-[#2E526B]  border-2">
              Agent App
            </div>
          </div>
          <div className="flex justify-center pt-[44px] ">
            <img src={Group5445} alt="Group5445" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage3;
