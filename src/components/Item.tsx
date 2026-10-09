import type { CarItem } from '../types/item';
import getFilePath from '../utils/getFILEPath';

import { useDispatch, useSelector } from 'react-redux';
import { setItem } from '../store/pickedItem/actions';
import { addFavourite, removeFavourite } from '../store/favourite/actions';

import type { AppDispatch } from '../store/store';

const Item = (props: CarItem) => {
	const { name, href, price, mileage, year, id } = props;
	const imageSrc = getFilePath(href);

	const dispatch = useDispatch<AppDispatch>();

	const ids: string[] = JSON.parse(
		useSelector((state: any) => state.favourites.ids),
	);

	const isFavourite = ids.includes(String(id));

	const handleFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();

		if (isFavourite) {
			dispatch(removeFavourite(String(id)));
		} else {
			dispatch(addFavourite(String(id)));
		}
	};

	return (
		<div
			onClick={() => {
				dispatch(setItem(props));
			}}
			className='group flex min-h-[350px] w-[300px] cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-gray-800/70 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/10'>
			<div className='relative h-48 w-full overflow-hidden bg-gray-900'>
				<img
					src={imageSrc}
					alt={name}
					className='h-full w-full object-cover transition duration-500 group-hover:scale-110'
				/>

				{/* Favourite button */}
				<button
					type='button'
					onClick={handleFavourite}
					aria-label={
						isFavourite ? 'Remove from favourites' : 'Add to favourites'
					}
					className={`absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-2xl backdrop-blur-md transition hover:scale-110 ${
						isFavourite
							? 'bg-red-500 text-white'
							: 'bg-black/50 text-white hover:bg-red-500'
					}`}>
					{isFavourite ? '♥' : '♡'}
				</button>

				<div className='absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-70 pointer-events-none' />

				<div className='absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md'>
					{year}
				</div>
			</div>

			<div className='flex flex-1 flex-col justify-between p-5'>
				<div>
					<p className='text-lg font-semibold capitalize tracking-tight text-white'>
						{name}
					</p>

					<div className='mt-3 flex items-center gap-2 text-sm text-gray-400'>
						<span>{mileage}</span>
						<span className='h-1 w-1 rounded-full bg-gray-600' />
						<span>{year}</span>
					</div>
				</div>

				<div className='mt-5 flex items-end justify-between'>
					<div>
						<p className='mb-1 text-xs uppercase tracking-wider text-gray-500'>
							Price
						</p>
						<p className='text-xl font-bold text-blue-400'>{price}</p>
					</div>

					<div className='flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white'>
						→
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
