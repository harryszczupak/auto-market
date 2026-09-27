const FilterModal = ({
    onClose,
    onSubmit,
    filter,
    onActiveFilter
}: {
    onClose: () => void;
    onSubmit: (formData: FormData) => void;
    filter: {[key:string]:string};
    onActiveFilter: (count: number) => void;
}) => {
    return (
        <div className="fixed inset-0  bg-black/50" >
            <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Filter Options
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Customize your search
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-2xl font-light text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
                    >
                        ×
                    </button>
                </div>

                {/* Form */}
                <div className="p-6">
                    <form
                        className="flex flex-col gap-6"
                        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            const count = Array.from(formData.entries()).filter(
                                ([_, value]) => value !== ""
                                    ).length;
                            onSubmit(formData);
                            onActiveFilter(count);
                            onClose();
                        }}
                    >
                        {/* Engine */}
                        <div>
                            <label
                                htmlFor="engine"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Engine
                            </label>

                            <select
                                id="engine"
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                name="engine"
                                defaultValue={filter.engine}
                            >
                                <option value="">Select Engine</option>
                                <option value="Benzyna">Benzyna</option>
                                <option value="engine2">Engine 2</option>
                                <option value="engine3">Engine 3</option>
                            </select>
                        </div>

                        {/* Filters */}
                        <div className="space-y-3">
                            <p className="text-sm font-medium text-gray-700">
                                Additional filters
                            </p>

                            <label
                                htmlFor="filter1"
                                className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
                            >
                                <input
                                    type="checkbox"
                                    id="filter1"
                                    className="h-4 w-4 accent-blue-600"
                                />
                                <span className="text-sm text-gray-700">
                                    Filter 1
                                </span>
                            </label>

                            <label
                                htmlFor="engine"
                                className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
                            >
                                <input
                                    type="checkbox"
                                    id="engine"
                                    className="h-4 w-4 accent-blue-600"
                                />
                                <span className="text-sm text-gray-700">
                                    Engine
                                </span>
                            </label>

                            <label
                                htmlFor="filter2"
                                className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
                            >
                                <input
                                    type="checkbox"
                                    id="filter2"
                                    className="h-4 w-4 accent-blue-600"
                                />
                                <span className="text-sm text-gray-700">
                                    Filter 2
                                </span>
                            </label>

                            <label
                                htmlFor="filter3"
                                className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
                            >
                                <input
                                    type="checkbox"
                                    id="filter3"
                                    className="h-4 w-4 accent-blue-600"
                                />
                                <span className="text-sm text-gray-700">
                                    Filter 3
                                </span>
                            </label>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.98]"
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
