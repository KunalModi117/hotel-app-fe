import RoomsImage from "../../assets/verticallyRectangleImage.jpg";
import DiningImage from "../../assets/DiningImage.jpg";
import ServiceAndFacilites from "../../assets/ServiceAndFacilities.jpg";
import ConferenceAndMeetings from "../../assets/ConferenceAndMeetings.jpg";
import WeddingPackageImage from "../../assets/WeddingPackage.jpg";

import { Grid } from "@mui/material";
import { RoundedImage } from "../roundedImage";

export const Facilities = () => {
  return (
    <div className="flex justify-center w-full py-14 bg-slate-100">
      <div className="flex items-center justify-center w-11/12">
        <Grid container columnGap={3} rowGap={3}>
          <Grid container xs={12} md={4}>
            <RoundedImage name={"Rooms"} img={RoomsImage} />
          </Grid>
          <Grid container xs={12} md={8} columnSpacing={3} rowSpacing={3}>
            <Grid item xs={12} md={6}>
              <RoundedImage name={"Dining"} img={DiningImage} />
            </Grid>

            <Grid item xs={12} md={6}>
              <RoundedImage
                name={"Conferences & Meetings"}
                img={ConferenceAndMeetings}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <RoundedImage
                name={"Services & Facilities"}
                img={ServiceAndFacilites}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <RoundedImage
                name={"Wedding Package"}
                img={WeddingPackageImage}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
