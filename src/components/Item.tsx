
interface CarItem {
    id: number;
    name: string;
    brand: string;
    year: number;
    price: string;
    mileage: string;
    engine: string;
    fuel: string;
    gearbox: string;
    href: string;
    description: string;
}
type ItemProps = {
    info:CarItem
    onClicked:() => void
}

const Item = ({ info,onClicked }: ItemProps) => {

    
    const imageSrc = new URL(`../assets/${info.href}`, import.meta.url).href;
   
    return (
        <div onClick={() => {
            onClicked()
            
        }} className="flex flex-col max-h-[350px] w-[300px] bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:border-gray-500 transition-all duration-300">
            
            <div className="w-full h-48 overflow-hidden">
                <img src={imageSrc} alt={info.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
           
            <div className="w-full p-4 bg-gray-800">
                <p className="text-white font-medium text-lg capitalize">{info.name}</p>
            </div>
            <div className="w-full pl-4 pb-4 flex gap-3 items-center">
                <p className="text-amber-50 ">{info.price}</p>
                <p className="text-gray-500">{info.mileage}</p>
                <p className="text-gray-500 text-sm">{info.year}</p>
            </div>
        </div>
    );
}

export default Item;