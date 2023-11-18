import { Card } from "../card";

export const Offers = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/5 flex flex-col justify-between h-fit p-5">
                <div className="text-blue-400">Special offers</div>
                <div className="flex justify-between">
                    <div className="text-2xl font-bold">Best offer of the month</div> <div className="text-blue-400">view all</div>
                </div>
                <div className="w-1/2 text-xs">Experience Fantastic Benefits and Obtain Better Rates When You Make a Direct Booking on Our Official Website</div>
                <div className="flex justify-around">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};