import CardImageOne from "../../assets/cardImageOne.jpg";
export const Card = () => {
    return (
        <div className="flex flex-col h-fit w-fit justify-center items-center bg-slate-50 rounded-2xl shadow-2xl">
            <img src={CardImageOne} alt="" className="w-11/12 h-44 object-cover rounded-xl" />
            <div className="w-full">Room</div>
            <div className="flex justify-between w-full"><div>H-Moon</div> <div>2</div></div>
            <div className="text-[8px]">Indulge in a Memorable One-Time Romantic Dinner for Two</div>
            <div className="w-full flex justify-center">$699/night</div>
        </div>
    )
}