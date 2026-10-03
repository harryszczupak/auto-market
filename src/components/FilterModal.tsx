const FilterModal = ({
    onClose,
    onSubmit,
    filter,
    onActiveFilter
}: {
    onClose: () => void;
    onSubmit: (formData: FormData) => void;
    filter: { [key: string]: string };
    onActiveFilter: (count: number) => void;
}) => {
    return (
        <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="absolute right-0 top-0 h-full w-full max-w-md border-l border-white/10 bg-gray-900/95 shadow-2xl backdrop-blur-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between border-b border-white/10 px-7 py-6">
                    <div>
                        <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                            Search
                        </p>

                        <h2 className="text-2xl font-bold tracking-tight text-white">
                            Filter Options
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Refine your car search
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl text-gray-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                        ×
                    </button>
                </div>

                <div className="p-7">
                    <form
                        className="flex flex-col gap-7"
                        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                            e.preventDefault();
                            e.stopPropagation();

                            const formData = new FormData(e.currentTarget);

                            const count = Array.from(formData.entries()).filter(
                                ([_, value]) => value !== ""
                            ).length;

                            onSubmit(formData);
                            onActiveFilter(count);
                            onClose();
                        }}
                    >
                        <div>
                            <label
                                htmlFor="engine"
                                className="mb-3 block text-sm font-medium text-gray-300"
                            >
                                Engine
                            </label>

                            <select
                                id="engine"
                                className="w-full appearance-none rounded-2xl border border-white/10 bg-gray-800 px-4 py-3.5 text-gray-200 outline-none transition hover:border-white/20 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10"
                                name="engine"
                                defaultValue={filter.engine}
                            >
                                <option value="">Select Engine</option>
                                <option value="Benzyna">Benzyna</option>
                                <option value="engine2">Engine 2</option>
                                <option value="engine3">Engine 3</option>
                            </select>
                        </div>

                        <div className="space-y-3">
                            <p className="text-sm font-medium text-gray-300">
                                Additional filters
                            </p>

                            <label
                                htmlFor="filter1"
                                className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-blue-500/30 hover:bg-blue-500/5"
                            >
                                <input
                                    type="checkbox"
                                    id="filter1"
                                    className="h-4 w-4 accent-blue-500"
                                />

                                <span className="text-sm text-gray-300">
                                    Filter 1
                                </span>
                            </label>

                            <label
                                htmlFor="engine"
                                className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-blue-500/30 hover:bg-blue-500/5"
                            >
                                <input
                                    type="checkbox"
                                    id="engine"
                                    className="h-4 w-4 accent-blue-500"
                                />

                                <span className="text-sm text-gray-300">
                                    Engine
                                </span>
                            </label>

                            <label
                                htmlFor="filter2"
                                className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-blue-500/30 hover:bg-blue-500/5"
                            >
                                <input
                                    type="checkbox"
                                    id="filter2"
                                    className="h-4 w-4 accent-blue-500"
                                />

                                <span className="text-sm text-gray-300">
                                    Filter 2
                                </span>
                            </label>

                            <label
                                htmlFor="filter3"
                                className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-blue-500/30 hover:bg-blue-500/5"
                            >
                                <input
                                    type="checkbox"
                                    id="filter3"
                                    className="h-4 w-4 accent-blue-500"
                                />

                                <span className="text-sm text-gray-300">
                                    Filter 3
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 w-full rounded-2xl bg-blue-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-500 hover:shadow-blue-900/30 active:scale-[0.98]"
                        >
                            Apply Filters
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;