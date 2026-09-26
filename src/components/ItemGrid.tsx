import Item from "./Item";
import { useState, type ChangeEvent } from "react";
import Modal from "./Modal";
const DUMMY_DATA = [
    {
        id: 0,
        name: 'Mazda 3',
        brand: 'Mazda',
        year: 2019,
        price: '68 900 PLN',
        mileage: '85 000 km',
        engine: '2.0 SkyActiv-G 122 KM',
        fuel: 'Benzyna',
        gearbox: 'Manualna',
        href: 'mazda3_16.jpg',
        description: 'Zadbana Mazda 3 z polskiego salonu. Bezwypadkowa, serwisowana w ASO. Bogate wyposażenie wersji Suration, w tym nagroda Bose, kamera cofania i wyświetlacz Head-Up.'
    },
    {
        id: 1,
        name: 'Audi A4',
        brand: 'Audi',
        year: 2021,
        price: '125 000 PLN',
        mileage: '45 000 km',
        engine: '2.0 TDI 190 KM',
        fuel: 'Diesel',
        gearbox: 'Automatyczna (S-Tronic)',
        href: 'audi.jpg',
        description: 'Nowoczesne Audi A4 w pakiecie S-line. Dynamiczny i bardzo oszczędny silnik diesla, napęd Quattro. Auto w stanie idealnym, gotowe do jazdy bez dodatkowego wkładu finansowego.'
    },
    {
        id: 2,
        name: 'Jaguar XE',
        brand: 'Jaguar',
        year: 2018,
        price: '89 900 PLN',
        mileage: '110 000 km',
        engine: '2.0 Turbo 250 KM',
        fuel: 'Benzyna',
        gearbox: 'Automatyczna',
        href: 'auto.jpg',
        description: 'Elegancki i sportowy Jaguar XE. Komfortowe wnętrze wykończone skórą, świetne właściwości jezdne i unikalny styl. Pełna historia serwisowa.'
    }
];
const ItemGrid = () => {
    const [val,setVal] = useState(null)
    const [searchValue,setSearchValue] = useState<string>("")
    const filteredData = DUMMY_DATA.filter((item) =>  {
        
        return item.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    console.log(filteredData)
    return (
        <main className=" flex-1 w-full  bg-gray-900">
            <div className="flex w-full justify-center">
                 <input onChange={(e:ChangeEvent<HTMLInputElement>) => { setSearchValue(e.target.value)}}
                 value={searchValue}
      type="text"
      placeholder="Find a car..."
      className="w-1/2 rounded-2xl m-5 border border-zinc-200 bg-white  px-5 py-4 pr-12 text-zinc-900 shadow-sm outline-nonetransition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-300 focus:border-zinc-900 focus:ring-4 focus:ring-zinc-900/10
      "
    />
            </div>
            <div className="w-full  bg-gray-900 grid grid-cols-3 gap-6 justify-items-center p-10">
{filteredData.map((item) => {
                    return <Item key={item.id } info={item} onClicked={() => {
                        setVal(item)
                    }}/>
            })}
            </div>
            
        {val && <Modal info={val} onClose={() => {
            setVal(null)
        }}/>}
        </main>
    );
}

export default ItemGrid;