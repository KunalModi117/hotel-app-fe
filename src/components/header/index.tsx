import Image from "../../assets/headerImage.jpg";
import headerLogo from "../../assets/HeaderLogo.svg";
export const Header = () => {
  return (
    <div className="flex flex-col items-center relative overflow-hidden sm:h-[658px]">
      <img
        src={Image}
        alt="header"
        className="w-full relative object-cover bg-gradient-to-b from-transparent to-blue-100 sm:h-[658px]"
      />
      <div className="text-xs flex fixed top-4 justify-between items-center rounded-2xl w-10/12 h-16 bg-white py-2 px-2 sm:py-5 sm:px-12 z-10 font-normal sm:text-2xl">
        <a href="/" className="hover:text-sky-700">
          Home
        </a>
        <a href="/" className="hover:text-sky-700">
          About
        </a>
        <a href="/" className="hover:text-sky-700">
          NewsLetter
        </a>
        <a href="/" className="hover:text-sky-700">
          <img src={headerLogo} alt="" />
        </a>
        <a href="/" className="hover:text-sky-700">
          Rooms
        </a>
        <a href="/" className="hover:text-sky-700">
          Services
        </a>
        <a href="/" className="hover:text-sky-700">
          Pricing
        </a>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-400 opacity-60"></div>
      <div className="absolute bottom-12 text-white text-4xl font-bold left-0 w-10/12 sm:left-28 sm:text-6xl">
        Discover Extraordinary Comfort in Hotels
      </div>
    </div>
  );
};
