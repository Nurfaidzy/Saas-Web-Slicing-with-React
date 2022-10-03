import Logo from "./Img/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const klik = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex justify-center absolute w-full md:visible invisible">
        <div className="md:px-[166px] md:py-[49px] w-full    ">
          <div className="flex justify-between ">
            <div>
              <img src={Logo} alt="logo" className="w-[155.3px] h-[58px]" />
            </div>
            <div>
              <ol className=" flex justify-end text-white gap-10 text-[18px]">
                <li className="py-[17px]">Solution</li>
                <li className="py-[17px]">Products</li>
                <li className="py-[17px]">About</li>
                <li className="py-[17px]">Contact</li>
                <li className="pl-10">
                  <ol className="flex justify-end gap-[10px]">
                    <li className="bg-white text-[#5752DA]  text-center  rounded-[15px]">
                      <div className="py-[17px] px-[38px]">Login</div>
                    </li>
                    <li className="bg-[#F48C06] text-white  text-center  rounded-[15px]">
                      <div className="py-[17px] px-[38px]">Sign up</div>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="md:invisible visible absolute w-full  ">
        <div className="flex justify-between py-[15px] px-[15px] ">
          <div>
            <img src={Logo} alt="logo" className="w-[100px]" />
          </div>
          <div className="pt-[5px] text-[30px] text-white">
            <AiOutlineMenu onClick={klik} />
          </div>
        </div>
        {open && (
          <div className="bg-black/60 h-screen">
            <div className="flex justify-end">
              <div className="bg-white h-screen absolute w-[250px]">
                <div className="flex justify-end py-[20px] px-[20px]">
                  <ol className="grid grid-cols-1 gap-[10px] text-[30px] text-end font-bold text-[#5752DA] ">
                    <li>Solution</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                      <ol className="grid grid-cols-1 gap-[20px] pt-[150px]">
                        <li className="bg-[#5752DA]  text-white  text-end  rounded-[15px]">
                          <div className="py-[17px] px-[38px]">Login</div>
                        </li>
                        <li className="bg-[#F48C06] text-white  text-end  rounded-[15px]">
                          <div className="py-[17px] px-[38px]">Sign up</div>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
