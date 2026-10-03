import Item from "./Item";
import type { CarItem } from "../types/item";
import { useEffect, useState, type ChangeEvent } from "react";
import Modal from "./Modal";
import { DUMMY_DATA } from "../data/DUMMY_DATA";
import FilterModal from "./FilterModal";
import { cars } from "../data/DUMMY_DATA";
import MenuItem from "./MenuItem";



const ItemGrid = () => {
    const [filters, setFilters] = useState<{ [key: string]: string }>({
        search: "",
        engine: "",
        year: "",
        brand: "",
        model:"",
    });

    const [debouncedsearch,setdebouncedsearch] = useState<string>("")
    const [activeFilter, setActiveFilter] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setdebouncedsearch(filters.search)
        },500)
        return () => clearTimeout(timer)
    })
    const [sortedBy, setSortedBy] = useState<string>("asc");
    const [pickedItem, setPickedItem] = useState<CarItem | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState<number>(1);

    const filteredData = DUMMY_DATA.filter(
        (item) =>
            item.name
                .toLowerCase()
                .includes(debouncedsearch.toLowerCase()) &&
            (filters.engine === "" || item.fuel === filters.engine) &&
            (filters.brand === "" || item.brand === filters.brand) &&
            (filters.model === "" || item.model === filters.model)
    );

    const sortedData = filteredData.sort((a, b) => {
        return sortedBy === "asc"
            ? parseInt(a.price) - parseInt(b.price)
            : parseInt(b.price) - parseInt(a.price);
    });

    const itemsPerPage = 12;
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const currentItems = sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <main className="min-h-screen w-full flex-1 bg-gray-900">

            {/* ================= CAR MENU ================= */}
            <div className="mx-10 mb-2 mt-8 flex justify-center">
                <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-700/60 bg-gray-800/80 shadow-2xl shadow-black/20 backdrop-blur-sm">

                    {/* Menu header */}
                    <div className="flex items-center justify-between border-b border-gray-700/70 px-6 py-4">
                        <div>
                            <h2 className="text-lg font-semibold text-white">
                                Choose your car
                            </h2>

                            <p className="mt-0.5 text-sm text-gray-400">
                                Select a brand and model
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-xl">
                            🚗
                        </div>
                    </div>

                    {/* Menu content */}
                    <div className="p-4">
                        <ul className="grid grid-cols-4 gap-2">
                            {cars.map((car, index) => (
                                <MenuItem
                                    key={`${car.name}-${index}`}
                                    onSelect={(path) => {
                                      setFilters({
                                        ...filters,
                                        brand: path[0] || "",
                                        model: path[1] || "",
                                      });
                                    }}
                                    {...car}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* ================= FILTER MODAL ================= */}
            {isOpen && (
                <FilterModal
                    onClose={() => setIsOpen(false)}
                    filter={filters}
                    onActiveFilter={(count) => setActiveFilter(count)}
                    onSubmit={(formData) => {
                        setFilters({
                            ...filters,
                            engine: formData.get("engine") as string,
                        });
                    }}
                />
            )}

            {/* ================= HEADER ================= */}
            <div className="w-full bg-gray-900 p-10">
                <h1 className="text-center text-3xl font-bold text-white">
                    Car Marketplace
                </h1>
            </div>

            {/* ================= SEARCH / FILTERS ================= */}
            <div className="flex w-full justify-center">

                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFilters({
                            ...filters,
                            search: e.target.value,
                        })
                    }
                    value={filters.search}
                    type="text"
                    placeholder="Find a car..."
                    className="
                        m-5 w-1/2 rounded-2xl
                        border border-zinc-200
                        bg-white
                        px-5 py-4 pr-12
                        text-zinc-900
                        shadow-sm
                        outline-none
                        transition-all duration-200
                        placeholder:text-zinc-400
                        hover:border-zinc-300
                        focus:border-zinc-900
                        focus:ring-4
                        focus:ring-zinc-900/10
                    "
                />

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="
                        m-5 flex items-center gap-2
                        rounded-2xl
                        bg-gray-800
                        px-5 py-4
                        text-white
                        shadow-sm
                        outline-none
                        transition-all duration-200
                        hover:bg-gray-700
                        focus:bg-gray-700
                        focus:ring-4
                        focus:ring-gray-900/10
                    "
                >
                    Filtry

                    {activeFilter > 0 && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                            {activeFilter}
                        </span>
                    )}
                </button>

                <button
                    onClick={() =>
                        setSortedBy(
                            sortedBy === "asc" ? "desc" : "asc"
                        )
                    }
                    className="
                        m-5 flex items-center gap-2
                        rounded-2xl
                        bg-gray-800
                        px-5 py-4
                        text-sm font-medium
                        text-white
                        shadow-sm
                        outline-none
                        transition-all duration-200
                        hover:bg-gray-700
                        hover:shadow-md
                        focus:bg-gray-700
                        focus:ring-4
                        focus:ring-blue-500/20
                        active:scale-[0.98]
                    "
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

            {/* ================= ITEMS ================= */}
            <div className="grid w-full grid-cols-3 justify-items-center gap-6 bg-gray-900 p-10">
                {currentItems.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            {...item}
                            onClicked={() => setPickedItem(item)}
                        />
                    );
                })}
            </div>

            {/* ================= ITEM MODAL ================= */}
            {pickedItem && (
                <Modal
                    {...pickedItem}
                    onClose={() => setPickedItem(null)}
                />
            )}

            {/* ================= PAGINATION ================= */}
            <div className="flex justify-center gap-2 p-10">
                {Array.from(
                    { length: totalPages },
                    (_, index) => {
                        const page = index + 1;

                        return (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`
                                    rounded-lg
                                    px-4 py-2
                                    font-medium
                                    transition-colors
                                    ${
                                        currentPage === page
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-800 text-white hover:bg-gray-700"
                                    }
                                `}
                            >
                                {page}
                            </button>
                        );
                    }
                )}
            </div>
        </main>
    );
};

export default ItemGrid;
