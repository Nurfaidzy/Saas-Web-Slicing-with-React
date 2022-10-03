import logo from "./Img/Logo2.png";
import Fb from "./Img/Facebook.png";
import Twitter from "./Img/Twitter.png";
import Instagram from "./Img/Instagram.png";
const Footer = () => {
  return (
    <div className="w-full md:px-[167px] px-[10%] ">
      <div className="md:flex md:justify-between  md:py-[93px]">
        <div>
          <div>
            <img src={logo} alt="logo" className="w-[155.3px] h-[58px]" />
          </div>
          <div className="py-[24px] leading-[30px] w-[295px] opacity-[0.8] text-[#2E526B]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-flow-col md:gap-[50px] opacity-[0.8]">
          <div>
            <ol>
              <li className="text-[#2E526B] text-[20px]">Product</li>
              <li className="md:pt-[25px]">Features</li>
              <li className="md:pt-[10px]">API</li>
              <li className="md:pt-[10px]">Solutions</li>
            </ol>
          </div>
          <div>
            <ol>
              <li className="text-[#2E526B] text-[20px]">Company</li>
              <li className="md:pt-[25px]">About Us</li>
              <li className="md:pt-[10px]">Blog</li>
              <li className="md:pt-[10px]">Contact us</li>
            </ol>
          </div>
          <div>
            <ol>
              <li className="text-[#2E526B] text-[20px] pt-[20px] md:pt-0">
                Support
              </li>
              <li className="md:pt-[25px]">Support center</li>
              <li className="md:pt-[10px]">System Statys</li>
              <li className="md:pt-[10px]">Languages</li>
            </ol>
          </div>
          <div>
            <ol>
              <li className="text-[#2E526B] text-[20px] pt-[20px] md:pt-0">
                Follow Us
              </li>
              <li className="flex justify-between  md:pt-[25px] md:gap-[15px]">
                <img src={Fb} alt="fb" />
                <img src={Twitter} alt="Twitter" />
                <img src={Instagram} alt="Instagram" />
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div>
        <div className="pt-[20px] md:pt-0">
          <hr />
        </div>
        <div className="md:flex md:justify-between py-4 text-[15px] text-[#2E526B] opacity-[0.5]">
          <div>C 2022 Saas</div>
          <div>Terms & Conditions | Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
