import back from "./Img/bforefooter.png";
import iconplay from "./Img/iconplay.png";
const Stage6 = () => {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(" + back + ")",
      }}
    >
      <div className="px-[167px] py-[180px] text-white">
        <div className="font-bold text-[40px] w-[515px] leading-[61px] ">
          Advanced Fleet Tracking Solution Tracker
        </div>
        <div className="py-[25px]">
          <ol className="flex">
            <li className="bg-[#F48C06] py-[17px] px-[40px] rounded-[15px] text-[21px]">
              Get Started
            </li>
            <li className="flex pl-[34px]">
              <div className="py-[15px]">
                <img src={iconplay} alt="iconplay" />
              </div>
              <div className="pl-[13.7px] py-[18px] text-[21px]">
                Watch how it works
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Stage6;
