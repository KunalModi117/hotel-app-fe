export const BookRoom = () => {
    return (
        <div className="flex justify-center items-center w-full py-24">
            <div className="flex flex-col w-10/12 bg-sky-50 rounded-[42px] gap-12 py-8">
                <div className="flex flex-col items-center">
                    <div className="font-medium text-3xl">Book a Room</div>
                    <div className="font-medium text-base text-gray-600">Discover the perfect space for you!</div>
                </div>
                <div className="flex flex-row w-full">
                    <div className="flex flex-col w-full">
                        <div className="font-bold text-base">Date</div>
                        <div>Check available</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="font-bold text-base">Person</div>
                        <div className="flex flex-row justify-between">
                            <div>Adults</div>
                            <div>children</div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center"><div className="bg-blue-400 text-white px-8 py-4 rounded-xl text-2xl font-bold w-fit">BOOK NOW</div></div>
                </div>
            </div>
        </div>
    )
}