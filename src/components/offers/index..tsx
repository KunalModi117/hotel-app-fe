import { Card } from "../card";
import CardImageOne from "../../assets/cardImageOne.jpg";
import CardImageTwo from "../../assets/cardImageTwo.jpg";
import CardImageThree from "../../assets/cardImageThree.jpg";

export const Offers = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-11/12 flex flex-col justify-between h-fit py-24 gap-7">
        <div className="text-blue-400 text-3xl font-medium">Special Offers</div>
        <div className="flex justify-between">
          <div className="text-6xl font-medium ">Best offer of the month</div>{" "}
          <div className="text-blue-400 text-2xl font-bold cursor-pointer">
            View all
          </div>
        </div>
        <div className="w-2/3 text-2xl">
          Experience Fantastic Benefits and Obtain Better Rates When You Make a
          Direct Booking on Our Official Website
        </div>
        <div className="flex flex-col gap-3 flex-wrap justify-between pt-6 sm:flex-row">
          <Card
            imgSrc={CardImageOne}
            smallHeading={"Room"}
            mainHeading={"Honeymoon"}
            capacity={"2"}
            desc={"Indulge in a Memorable One-Time Romantic Dinner for Two"}
            price={699}
            denominator={"night"}
          />
          <Card
            imgSrc={CardImageTwo}
            smallHeading={"Room"}
            mainHeading={"Meetings"}
            capacity={"30"}
            desc={
              "Experience an Exclusively Private Environment to Boost Your Productivity"
            }
            price={999}
            denominator={"night"}
          />
          <Card
            imgSrc={CardImageThree}
            smallHeading={"Dining"}
            mainHeading={"Romantic Dining"}
            capacity={"2"}
            desc={"Indulge in a Memorable One-Time Romantic Dinner for Two"}
            price={499}
            denominator={"table"}
          />
        </div>
      </div>
    </div>
  );
};
