import PersonImage from '../../assets/Person.svg'
import ChildenImage from '../../assets/Children.svg'
import CalendarImage from '../../assets/Calendar.svg'
export const BookRoom = () => {
    return (
        <div className="flex justify-center items-center w-full py-24">
            <div className="flex flex-col w-10/12 bg-sky-50 rounded-[42px] gap-12 py-8 pb-16">
                <div className="flex flex-col items-center">
                    <div className="font-medium text-3xl">Book a Room</div>
                    <div className="font-medium text-base text-gray-600">Discover the perfect space for you!</div>
                </div>
                <div className="flex flex-row w-full justify-around">
                    <div className="flex flex-col w-fit gap-4">
                        <div className="font-bold text-base">Date</div>
                        <div className="flex bg-white rounded-xl px-12 py-4 font-semibold text-base gap-2 cursor-pointer"> <img src={CalendarImage} alt="" />Check Available</div>
                    </div>
                    <div className="flex flex-col w-fit gap-4">
                        <div className="font-bold text-base">Person</div>
                        <div className="flex justify-between bg-white rounded-xl px-12 py-4 font-semibold text-base gap-2">
                            <div className='flex gap-3'><img src={PersonImage} alt="" /> <span>Adults</span> <span>2</span> <select name="" id=""></select></div>
                            <div className='flex gap-3'><img src={ChildenImage} alt="" /> <span>Children</span> <span>0</span> <select name="" id=""></select></div>
                        </div>
                    </div>
                    <div className="w-fit flex items-end justify-center"><div className="bg-blue-400 text-white px-8 py-4 rounded-xl text-2xl font-bold w-fit cursor-pointer">BOOK NOW</div></div>
                </div>
            </div>
        </div>
    )
}