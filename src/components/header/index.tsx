import Image from "../../assets/headerImage.jpg";
import headerLogo from '../../assets/HeaderLogo.svg';
export const Header = () => {
    return (
        <div className="flex flex-col items-center relative overflow-hidden h-[658px]">
            <img
                src={Image}
                alt="header"
                className="max-w-full h-auto relative object-cover bg-gradient-to-b from-transparent to-blue-100"
            />
            <div className="absolute top-4 flex justify-between items-center rounded-2xl w-10/12 h-16 bg-white py-5 px-12 z-10 font-normal text-2xl">
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
            <div className="absolute bottom-12 text-white text-6xl font-bold left-28 w-10/12">
                Discover Extraordinary Comfort in Hotels
            </div>
        </div>
    );
};