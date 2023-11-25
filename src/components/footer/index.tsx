import { Grid } from "@mui/material"
import Logo from "../../assets/HotelLogo.png";
export const Footer = () => {
    return (
        <div className="flex bg-opacity-90 bg-neutral-950 p-12">
            <div className="flex-1 flex justify-center items-center">
                <div className="flex flex-col text-white">
                    <Grid container rowSpacing={2}>
                        <Grid item xs={12}>
                            <div>Newsletter & Special Promo</div>
                        </Grid>
                        <Grid item xs={12}>
                            <div>Text Box</div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="flex flex-1 flex-col text-white">
                <div className="w-full flex justify-center"><img src={Logo} alt="" className="w-24" /></div>
                <Grid container>
                    <Grid item xs={4} rowGap={5} rowSpacing={5}>
                        <Grid item>
                            <div>About Us</div>
                        </Grid>
                        <Grid item>
                            <div>Contact</div>
                        </Grid>
                        <Grid item>
                            <div>Location</div>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <div>FAQ</div>
                        <div>Term of Use</div>
                        <div>Privacy Police</div>
                    </Grid>
                    <Grid item xs={4}>
                        <div>Services & Facilities</div>
                        <div>Careers</div>
                        <div>How to book</div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};