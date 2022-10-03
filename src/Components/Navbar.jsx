import Logo from "./Img/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-center absolute w-full md:visible invisible">
        <div className="px-[166px] py-[49px] w-full    ">
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
      <div className="md:invisible visible absolute w-full ">
        <div className="flex justify-between py-[15px] px-[15px] ">
          <div>
            <img src={Logo} alt="logo" className="w-[100px]" />
          </div>
          <div className="pt-[5px] text-[30px] text-white">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
