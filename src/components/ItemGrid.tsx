import Item from "./Item";
import type { CarItem } from "../types/item";
import { useEffect, useState, type ChangeEvent } from "react";
import Modal from "./Modal";
import { DUMMY_DATA } from "../data/DUMMY_DATA";
import FilterModal from "./FilterModal";
import { cars } from "../data/DUMMY_DATA";
import MenuItem from "./MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, clearFilter } from "../store/filters/actions";
import type { AppDispatch, RootState } from "../store/store";

const ItemGrid = () => {
    const filters = useSelector((state: RootState) => state.filter);
    const dispatch = useDispatch<AppDispatch>();

    const [debouncedsearch, setdebouncedsearch] = useState<string>("");
    const [activeFilter, setActiveFilter] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setdebouncedsearch(filters.search);
        }, 500);

        return () => clearTimeout(timer);
    });

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

            {/* Car selector */}
            <div className="mx-auto mb-4 mt-8 max-w-6xl px-6">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-gray-800/60 shadow-2xl shadow-black/20 backdrop-blur-sm">

                    <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
                        <div>
                            <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                                Collection
                            </p>

                            <h2 className="text-xl font-bold text-white">
                                Choose your car
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Select a brand and model
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-xl">
                            🚗
                        </div>
                    </div>

                    <div className="p-5">
                        <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
                            {cars.map((car, index) => (
                                <MenuItem
                                    key={`${car.name}-${index}`}
                                    onSelect={(path) => {
                                        dispatch(setFilter("brand", path[0] || ""));
                                        dispatch(setFilter("model", path[1] || ""));
                                    }}
                                    {...car}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {isOpen && (
                <FilterModal
                    onClose={() => setIsOpen(false)}
                    filter={filters}
                    onActiveFilter={(count) => setActiveFilter(count)}
                    onSubmit={(formData) => {
                        dispatch(
                            setFilter(
                                "engine",
                                formData.get("engine") as string
                            )
                        );
                    }}
                />
            )}

            <div className="w-full px-6 py-8">

                {/* Search + controls */}
                <div className="mx-auto flex max-w-6xl flex-col gap-3 lg:flex-row">

                    <div className="relative flex-1">
                        <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-gray-500">
                            ⌕
                        </span>

                        <input
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                dispatch(setFilter("search", e.target.value))
                            }
                            value={filters.search}
                            type="text"
                            placeholder="Find a car..."
                            className="w-full rounded-2xl border border-white/10 bg-gray-800/70 px-12 py-4 text-white shadow-sm outline-none backdrop-blur-sm transition placeholder:text-gray-500 hover:border-white/20 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-gray-800 px-6 py-4 font-medium text-white transition hover:border-blue-500/30 hover:bg-gray-700 active:scale-[0.98]"
                    >
                        <span>Filters</span>

                        {activeFilter > 0 && (
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs text-white">
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
                        className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-gray-800 px-6 py-4 text-sm font-medium text-white transition hover:border-white/20 hover:bg-gray-700 active:scale-[0.98]"
                    >
                        <span className="text-lg text-blue-400">
                            {sortedBy === "asc" ? "↑" : "↓"}
                        </span>

                        <span className="hidden sm:block">
                            {sortedBy === "asc"
                                ? "Price: Low to High"
                                : "Price: High to Low"}
                        </span>
                    </button>

                    <button
                        onClick={() => {
                            setActiveFilter(0);
                            dispatch(clearFilter());
                        }}
                        className="flex items-center justify-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/5 px-6 py-4 text-sm font-medium text-red-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-300 active:scale-[0.98]"
                    >
                        <span>✕</span>
                        Clear
                    </button>
                </div>
            </div>

            {/* Cars */}
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-6 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

            {pickedItem && (
                <Modal
                    {...pickedItem}
                    onClose={() => setPickedItem(null)}
                />
            )}

            {/* Pagination */}
            <div className="flex justify-center gap-2 border-t border-white/5 px-6 py-10">
                {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;

                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`flex h-10 min-w-10 items-center justify-center rounded-xl px-3 font-medium transition-all ${
                                currentPage === page
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                                    : "border border-white/10 bg-gray-800 text-gray-400 hover:border-white/20 hover:bg-gray-700 hover:text-white"
                            }`}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>
        </main>
    );
};

export default ItemGrid;