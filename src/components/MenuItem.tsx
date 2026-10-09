import { useState } from 'react';

type MenuItemProps = {
	name: string;
	path?: string[];
	children?: MenuItemProps[];
	onSelect?: (name: string[]) => void;
};

const MenuItem = ({ name, children, onSelect, path = [] }: MenuItemProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const hasChildren = children && children.length > 0;

	const currentPath = [...path, name];

	return (
		<li className='list-none'>
			<div
				onClick={(e) => {
					e.preventDefault();
					onSelect?.(currentPath);
				}}
				className={`group flex items-center justify-between rounded-2xl border transition-all duration-200 ${
					isOpen
						? 'border-blue-500/30 bg-blue-500/10'
						: 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.05]'
				}`}>
				<a
					href='#'
					className='flex-1 px-4 py-3.5 text-sm font-medium text-gray-300 transition-colors group-hover:text-white'>
					{name}
				</a>

				<button
					className='mr-2 flex h-8 w-8 items-center justify-center rounded-xl text-gray-500 transition-all duration-200 hover:bg-white/10 hover:text-white'
					onClick={(e) => {
						e.stopPropagation();
						setIsOpen(!isOpen);
					}}>
					<span
						className={`text-[10px] transition-transform duration-200 ${
							isOpen ? 'rotate-90 text-blue-400' : ''
						}`}>
						▶
					</span>
				</button>
			</div>

			{hasChildren && isOpen && (
				<ul className='ml-4 mt-2 border-l border-blue-500/20 pl-2'>
					{children.map((child, index) => (
						<MenuItem
							key={index}
							path={currentPath}
							onSelect={onSelect}
							{...child}
						/>
					))}
				</ul>
			)}
		</li>
	);
};

export default MenuItem;
