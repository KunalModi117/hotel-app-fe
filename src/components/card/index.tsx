import PersonImage from '../../assets/Person.svg'
export const Card = ({ imgSrc, smallHeading, mainHeading, capacity, desc, price, denominator }: any) => {
    return (
        <div className="flex flex-col h-fit w-fit justify-center items-center bg-slate-50 rounded-[42px] shadow-2xl p-5 gap-4 pb-10 cursor-pointer hover:animate-pulse">
            <img src={imgSrc} alt="" className="w-80 h-64 object-cover rounded-3xl" />
            <div className="w-full text-xs font-bold text-gray-700">{smallHeading}</div>
            <div className="flex justify-between w-full font-bold"><div className='text-2xl'>{mainHeading}</div> <div className="flex"><img src={PersonImage} alt="" className="mr-2 mt-1" /><div className="font-semibold flex items-end">{capacity}</div></div></div>
            <div className="text-xs font-normal max-w-xs">{desc}</div>
            <div className="w-full flex justify-center items-end"><div className="font-bold text-4xl">${price}</div><div>/{denominator}</div></div>
        </div>
    )
}