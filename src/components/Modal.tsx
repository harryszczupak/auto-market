import type { CarItem } from "../types/item";
import getFilePath from "../utils/getFILEPath";

type ItemProps = CarItem & {
    onClose: () => void;
};

const Modal = ({
    name,
    href,
    price,
    mileage,
    year,
    brand,
    engine,
    fuel,
    gearbox,
    description,
    onClose
}: ItemProps) => {
    const imageSrc = getFilePath(href);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={onClose}
        >
            <div
                className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-gray-900 shadow-2xl shadow-black/50 lg:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-2xl text-gray-300 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                    ×
                </button>

                {/* Left side */}
                <div className="flex min-h-0 w-full flex-col bg-gray-800 lg:w-1/2">

                    <div className="relative h-72 w-full overflow-hidden">
                        <img
                            src={imageSrc}
                            alt={name}
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                        <div className="absolute bottom-5 left-6">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                                {brand}
                            </p>

                            <h2 className="mt-1 text-3xl font-bold text-white">
                                {name}
                            </h2>
                        </div>
                    </div>

                    <div className="overflow-y-auto p-6">

                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    Year
                                </p>

                                <p className="mt-1 font-semibold text-white">
                                    {year}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    Mileage
                                </p>

                                <p className="mt-1 font-semibold text-white">
                                    {mileage}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    Engine
                                </p>

                                <p className="mt-1 font-semibold text-white">
                                    {engine}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    Fuel
                                </p>

                                <p className="mt-1 font-semibold text-white">
                                    {fuel}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    Gearbox
                                </p>

                                <p className="mt-1 font-semibold text-white">
                                    {gearbox}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-blue-500/10 bg-blue-500/5 p-4">
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    Price
                                </p>

                                <p className="mt-1 font-bold text-blue-400">
                                    {price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex w-full flex-col justify-between bg-gray-900 p-7 lg:w-1/2 lg:p-9">

                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                            Available
                        </span>

                        <h3 className="mt-7 text-2xl font-bold text-white">
                            About this car
                        </h3>

                        <p className="mt-4 text-base leading-7 text-gray-400">
                            {description}
                        </p>
                    </div>

                    <div className="mt-8">
                        <div className="mb-6 border-t border-white/10 pt-6">
                            <p className="text-sm text-gray-500">
                                Current price
                            </p>

                            <p className="mt-1 text-4xl font-bold tracking-tight text-white">
                                {price}
                            </p>
                        </div>

                        <button
                            className="w-full rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-500 hover:shadow-blue-900/30 active:scale-[0.98]"
                            onClick={() => {}}
                        >
                            Contact seller
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;