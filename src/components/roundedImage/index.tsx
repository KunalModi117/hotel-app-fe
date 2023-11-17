export const RoundedImage = ({ img, name }: { img: string, name: string }) => {
    return (
        <div className="relative">
            <img src={img} alt="VerticalImage" className="rounded-2xl w-full h-full object-cover" />
            <div className="absolute bottom-0 font-bold text-white w-full flex justify-center">
                {name}
            </div>
        </div>
    );
}