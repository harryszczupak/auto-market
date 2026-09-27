import Item from "./Item";
import type { CarItem } from "../types/item";
import { useState, type ChangeEvent } from "react";
import Modal from "./Modal";
import { DUMMY_DATA } from "../data/DUMMY_DATA";
import FilterModal from "./FilterModal";

const ItemGrid = () => {

    const [filters,setFilters] = useState<{[key:string]:string}>({
        search:"",
        engine:"",
        year:"",
    })
   
    const [activeFilter,setActiveFilter] = useState<number>(0)

    const [sortedBy,setSortedBy] = useState<string>("asc")
    const [pickedItem,setPickedItem] = useState<CarItem | null>(null)
    const [isOpen,setIsOpen] = useState<boolean>(false)
    
    const [currentPage, setCurrentPage] = useState<number>(1);
    const filteredData = DUMMY_DATA.filter((item) => item.name.toLowerCase().includes(filters.search.toLowerCase() ) && (filters.engine === "" || item.fuel === filters.engine));
    
    const sortedData = filteredData.sort((a,b) => {
      return   sortedBy === "asc" ? parseInt(a.price) - parseInt(b.price) : parseInt(b.price) - parseInt(a.price)
    })
    const itemsPerPage = 3
    const totalPages = Math.ceil(sortedData.length / itemsPerPage)
    
    const currentItems = sortedData.slice((currentPage -1) * itemsPerPage, currentPage * itemsPerPage)
    return (

        <main className=" flex-1 w-full  bg-gray-900">
            
            {isOpen && <FilterModal onClose={() => setIsOpen(false)} filter={filters} onActiveFilter={(count) => setActiveFilter(count)} onSubmit={(formData) => {
                setFilters({
                    ...filters,
                    engine: formData.get("engine") as string
                });
               
            }}/>}
            <div className="w-full bg-gray-900 p-10">
                <h1 className="text-center text-3xl font-bold text-white">Car Marketplace</h1>
            </div>
            <div className="flex w-full justify-center">
                 <input onChange={(e:ChangeEvent<HTMLInputElement>) => setFilters({...filters, search:e.target.value})} value={filters.search} type="text" placeholder="Find a car..." className="w-1/2 rounded-2xl m-5 border border-zinc-200 bg-white  px-5 py-4 pr-12 text-zinc-900 shadow-sm outline-nonetransition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-300 focus:border-zinc-900 focus:ring-4 focus:ring-zinc-900/10"/>
                    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 m-5 rounded-2xl bg-gray-800 px-5 py-4 text-white shadow-sm outline-none transition-all duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:ring-4 focus:ring-gray-900/10">Filtry 
                {activeFilter > 0 && (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
            {activeFilter}
        </span>
    )}
            </button>
         <button
  onClick={() => setSortedBy(sortedBy === "asc" ? "desc" : "asc")}
  className="m-5 flex items-center gap-2 rounded-2xl bg-gray-800 px-5 py-4 text-sm font-medium text-white shadow-sm outline-none transition-all duration-200 hover:bg-gray-700 hover:shadow-md focus:bg-gray-700 focus:ring-4 focus:ring-blue-500/20 active:scale-[0.98]"
>
  <span className="text-blue-400">
    {sortedBy === "asc" ? "↑" : "↓"}
  </span>

  <span>
    {sortedBy === "asc"
      ? "Sort by Price: Low to High"
      : "Sort by Price: High to Low"}
  </span>
</button>

            </div>
            <div className="w-full  bg-gray-900 grid grid-cols-3 gap-6 justify-items-center p-10">
            {currentItems.map((item) => {
                    return <Item key={item.id } {...item} onClicked={() =>setPickedItem(item)
                    }/>
            })}
            </div>
        {pickedItem && <Modal {...pickedItem} onClose={() => setPickedItem(null)}/>}
            <div className="flex justify-center gap-4 p-10">
                
            </div>

            <div className="flex justify-center gap-2 p-10">
  {Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;

    return (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`rounded-lg px-4 py-2 font-medium transition-colors ${
          currentPage === page
            ? "bg-blue-600 text-white"
            : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
      >
        {page}
      </button>
    );
  })}
</div>

        </main>
        
    );

}

export default ItemGrid;