import { Card } from "../card";
export const Offers = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-11/12 flex flex-col justify-between h-fit py-24 gap-7">
                <div className="text-blue-400 text-3xl font-medium">Special Offers</div>
                <div className="flex justify-between">
                    <div className="text-6xl font-medium ">Best offer of the month</div> <div className="text-blue-400 text-2xl font-bold">View all</div>
                </div>
                <div className="w-2/3 text-2xl">Experience Fantastic Benefits and Obtain Better Rates When You Make a Direct Booking on Our Official Website</div>
                <div className="flex justify-between pt-6">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};