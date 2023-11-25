export const RoundedImage = ({ img, name }: { img: string, name?: string }) => {
    return (
        <div className="relative">
            <img src={img} alt="VerticalImage" className="rounded-[42px] w-full h-full object-cover" />
            <div className="absolute bottom-6 font-bold text-2xl text-white w-full flex justify-center">
                {name ? name : ""}
            </div>
        </div>
    );
}