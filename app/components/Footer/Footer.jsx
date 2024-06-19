import BtnFooter from "../BtnFooter/BtnFooter";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import FooterItem from "./FooterItem";
const social = [
  {
    title: "GitHub",
    link: "https://github.com/Agustin-Gonzalorena",
    Icon: FaGithub,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/agustin-gonzalorena",
    Icon: CiLinkedin,
  },
  {
    title: "Portfolio",
    link: "https://agonzalorena.vercel.app",
    Icon: IoPersonCircleSharp,
  },
];
const Footer = () => {
  //obetener año actual
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="md:h-52 w-full flex justify-center ">
      <div className="w-11/12 flex flex-col justify-around">
        <div
          id="up"
          className=" flex flex-col gap-4 md:gap-0 md:flex-row justify-between text-neutral-800 font-light"
        >
          <FooterItem />
          <div>
            <p className="font-medium">Agustin Gonzalorena</p>
            <div className="flex flex-col gap-2 mt-2">
              {social.map((item, index) => (
                <BtnFooter
                  key={index}
                  Icon={item.Icon}
                  title={item.title}
                  link={item.link}
                />
              ))}
            </div>
          </div>
          <div className="md:text-end flex flex-col gap-2">
            <p className="font-medium">Technologies used</p>
            <a
              href="https://github.com/bitcoinjs/bip39"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bip39
            </a>
            <a
              href="https://docs.ethers.org/v6/getting-started/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ethers
            </a>
          </div>
        </div>
        <div id="down" className="text-neutral-500 text-center">
          <p>copyright ©{year} Wallet Creator</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
