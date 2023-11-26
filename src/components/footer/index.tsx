import { Grid } from "@mui/material"
import Logo from "../../assets/HotelLogo.png";
export const Footer = () => {
    return (
        <div className="flex flex-col bg-opacity-90 bg-neutral-950 p-12 gap-8 py-16">
            <div className="flex gap-9">
                <div className="flex-1 flex justify-center items-center">
                    <div className="flex flex-col text-white font-medium text-4xl">
                        <Grid container rowSpacing={5}>
                            <Grid item xs={12}>
                                <div>Newsletter & Special Promo</div>
                            </Grid>
                            <Grid item xs={12} className="flex relative">
                                <input type="text" className="text-black rounded-2xl py-5 px-12 items-center caret-transparent outline-none placeholder:text-2xl font-medium" placeholder="Enter your email here" /><div className="rounded-e-2xl py-6 px-12 bg-blue-400 absolute right-10 font-bold text-2xl">Subscribe</div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="flex flex-1 flex-col text-white gap-5">
                    <div className="w-full flex justify-center text-base font-medium"><img src={Logo} alt="" className="w-32" /></div>
                    <div className="flex gap-36">
                        <div className="flex flex-col gap-3 cursor-pointer">
                            <div>About Us</div>
                            <div>Contact</div>
                            <div>Location</div>
                        </div>
                        <div className="flex flex-col gap-3 cursor-pointer">
                            <div>FAQ</div>
                            <div>Term of Use</div>
                            <div>Privacy Police</div>
                        </div>
                        <div className="flex flex-col gap-3 cursor-pointer">
                            <div>Services & Facilities</div>
                            <div>Careers</div>
                            <div>How to book</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-16">
                <hr className="w-1/3 border-t-gray-600" />
            </div>
            <div className="w-full text-white flex justify-center font-normal text-base">© Copyright Kunal Modi. No rights reserved :)</div>
        </div>
    );
};