export const BookRoom = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex flex-col w-10/12 bg-slate-200 rounded-xl">
                <div className="flex flex-col items-center">
                    <div>Book a Room</div>
                    <div>Discover the perfect space for you!</div>
                </div>
                <div className="flex flex-row w-full">
                    <div className="flex flex-col w-full">
                        <div>Date</div>
                        <div>Check available</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div>Person</div>
                        <div className="flex flex-row justify-between">
                            <div>Adults</div>
                            <div>children</div>
                        </div>
                    </div>
                    <div className="w-full">Button</div>
                </div>
            </div>
        </div>
    )
}