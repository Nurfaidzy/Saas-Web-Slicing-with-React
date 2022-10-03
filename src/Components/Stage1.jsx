import Heroimage from "./Img/gambarhero.png";
import Background from "./Img/Vector.png";
import iconplay from "./Img/iconplay.png";
const Stage1 = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat pb-[50px] md:pb-[450px]"
        style={{
          backgroundImage: "url(" + Background + ")",
        }}
      >
        <div className="pt-[10%]">
          <div className="md:flex md:justify-between px-[20px] md:px-[166px] py-[49px]">
            <div className=" md:py-[63px]  text-white">
              <div className="text-[55px] leading-[63px]">
                SaaS Delivery Management Software
              </div>
              <div className="text-[20px] py-[32px] opacity-[0.8]">
                Track and optimize routes in real-time
              </div>
              <div>
                <ol className="md:flex">
                  <li className="bg-[#F48C06] text-center py-[17px] px-[40px] rounded-[15px] text-[21px]">
                    Get Started
                  </li>
                  <li className="flex md:pl-[34px] pt-[10px] md:pt-[0] justify-center ">
                    <div className="py-[15px]">
                      <img src={iconplay} alt="iconplay" />
                    </div>
                    <div className="pl-[13.7px] py-[18px] text-[21px] ">
                      Watch how it works
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="">
              <img
                className="2xl:py-0 pl-[10px] md:pl-0 md:py-[10%] w-fit h-fit"
                src={Heroimage}
                alt="images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage1;
