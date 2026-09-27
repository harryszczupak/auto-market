import type { CarItem } from "../types/item";
import getFilePath from "../utils/getFILEPath";
type ItemProps = CarItem &{
    onClicked:() => void
}

const Item = ({ name,href,price,mileage,year,onClicked }: ItemProps) => {

    const imageSrc = getFilePath(href)
   
    return (
        <div onClick={() => onClicked()} className="flex flex-col max-h-[350px] w-[300px] bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:border-gray-500 transition-all duration-300">
            
            <div className="w-full h-48 overflow-hidden">
                <img src={imageSrc} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
           
            <div className="w-full p-4 bg-gray-800">
                <p className="text-white font-medium text-lg capitalize">{name}</p>
            </div>
            <div className="w-full pl-4 pb-4 flex gap-3 items-center">
                <p className="text-amber-50 ">{price}</p>
                <p className="text-gray-500">{mileage}</p>
                <p className="text-gray-500 text-sm">{year}</p>
            </div>
        </div>
    );
}

export default Item;