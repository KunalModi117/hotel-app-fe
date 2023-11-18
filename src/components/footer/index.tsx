export const Footer = () => {
    return (
        <div className="flex">
            <div className="flex flex-col flex-1">
                <div>Newsletter & Special Promo</div>
                <div>Text Box</div>
            </div>
            <div className="flex flex-1 flex-col ">
                <div className="w-full flex justify-center">logo</div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div>About Us</div>
                        <div>Contact</div>
                        <div>Location</div>
                    </div>
                    <div className="flex flex-col">
                        <div>FAQ</div>
                        <div>Term of Use</div>
                        <div>Privacy Police</div>
                    </div>
                    <div className="flex flex-col">
                        <div>Services & Facilities</div>
                        <div>Careers</div>
                        <div>How to book</div>
                    </div>
                </div>
            </div>
        </div>
    );
};