import logo from "./Img/Logo2.png";
import Fb from "./Img/Facebook.png";
import Twitter from "./Img/Twitter.png";
import Instagram from "./Img/Instagram.png";
const Footer = () => {
  return (
    <div className="w-full  px-[167px] ">
      <div className="flex justify-between py-[93px]">
        <div>
          <div>
            <img src={logo} alt="logo" className="w-[155.3px] h-[58px]" />
          </div>
          <div className="py-[24px] leading-[30px] w-[295px] opacity-[0.8] text-[#2E526B]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div>
          <ol>
            <li className="text-[#2E526B] text-[20px]">Product</li>
            <li className="pt-[25px]">Features</li>
            <li className="pt-[10px]">API</li>
            <li className="pt-[10px]">Solutions</li>
          </ol>
        </div>
        <div>
          <ol>
            <li className="text-[#2E526B] text-[20px]">Company</li>
            <li className="pt-[25px]">About Us</li>
            <li className="pt-[10px]">Blog</li>
            <li className="pt-[10px]">Contact us</li>
          </ol>
        </div>
        <div>
          <ol>
            <li className="text-[#2E526B] text-[20px]">Support</li>
            <li className="pt-[25px]">Support center</li>
            <li className="pt-[10px]">System Statys</li>
            <li className="pt-[10px]">Languages</li>
          </ol>
        </div>
        <div>
          <ol>
            <li className="text-[#2E526B] text-[20px]">Follow Us</li>
            <li className="flex justify-between pt-[25px] gap-[15px]">
              <img src={Fb} alt="fb" />
              <img src={Twitter} alt="Twitter" />
              <img src={Instagram} alt="Instagram" />
            </li>
          </ol>
        </div>
      </div>
      <div>
        <div>
          <hr />
        </div>
        <div className="flex justify-between py-4 text-[15px] text-[#2E526B] opacity-[0.5]">
          <div>C 2022 Saas</div>
          <div>Terms & Conditions | Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
