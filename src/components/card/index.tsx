import CardImageOne from "../../assets/cardImageOne.jpg";
import PersonImage from '../../assets/Person.svg'
export const Card = () => {
    return (
        <div className="flex flex-col h-fit w-fit justify-center items-center bg-slate-50 rounded-[42px] shadow-2xl p-5 gap-4 pb-10">
            <img src={CardImageOne} alt="" className="w-80 h-64 object-cover rounded-3xl" />
            <div className="w-full text-xs font-bold text-gray-700">Room</div>
            <div className="flex justify-between w-full font-bold"><div>H-Moon</div> <div className="flex"><img src={PersonImage} alt="" className="mr-2" /><div className="font-semibold">2</div></div></div>
            <div className="text-xs font-normal">Indulge in a Memorable One-Time Romantic Dinner for Two</div>
            <div className="w-full flex justify-center items-end"><div className="font-bold text-4xl">$699</div><div>/night</div></div>
        </div>
    )
}