import type { CarItem } from "../types/item";
import getFilePath from "../utils/getFILEPath";

type ItemProps = CarItem & {
  onClose: () => void;
};

const Modal = ({ name, href, price, mileage, year, brand, engine, fuel, gearbox, description, onClose }: ItemProps) => {
  const imageSrc = getFilePath(href);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-gray-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-2xl text-white transition hover:bg-white/20"
        >
          ×
        </button>

        
        <div className="flex flex-col min-h-0 w-1/2 bg-gray-800">
         
          <div className="h-72 w-full overflow-hidden">
            <img
              src={imageSrc}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>

          
          <div className="p-7 overflow-y-auto">
            <p className="mb-1 text-sm font-medium uppercase tracking-wider text-gray-400">
              {brand}
            </p>

            <h2 className="mb-6 text-3xl font-bold text-white">
              {name}
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-gray-700/60 p-4">
                <p className="text-xs text-gray-400">Year</p>
                <p className="mt-1 font-semibold text-white">{year}</p>
              </div>

              <div className="rounded-xl bg-gray-700/60 p-4">
                <p className="text-xs text-gray-400">Mileage</p>
                <p className="mt-1 font-semibold text-white">
                  {mileage}
                </p>
              </div>

              <div className="rounded-xl bg-gray-700/60 p-4">
                <p className="text-xs text-gray-400">Engine</p>
                <p className="mt-1 font-semibold text-white">{engine}</p>
              </div>

              <div className="rounded-xl bg-gray-700/60 p-4">
                <p className="text-xs text-gray-400">Fuel</p>
                <p className="mt-1 font-semibold text-white">{fuel}</p>
              </div>

              <div className="rounded-xl bg-gray-700/60 p-4">
                <p className="text-xs text-gray-400">Gearbox</p>
                <p className="mt-1 font-semibold text-white">
                  {gearbox}
                </p>
              </div>

              <div className="rounded-xl bg-gray-700/60 p-4">
                <p className="text-xs text-gray-400">Price</p>
                <p className="mt-1 font-bold text-green-400">{price}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-1/2 flex-col justify-between bg-gray-900 p-8">
          <div>
            <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
              Available
            </span>

            <h3 className="mt-6 text-2xl font-bold text-white">
              About this car
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-400">
              {description}
            </p>
          </div>

          <div className="mt-8">
            <div className="mb-5 border-t border-gray-700 pt-5">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-3xl font-bold text-white">{price}</p>
            </div>

            <button
              className="w-full rounded-xl bg-green-500 px-6 py-3 font-semibold text-gray-950 transition hover:bg-green-400"
              onClick={() => {
            
              }}
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
