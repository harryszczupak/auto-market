
import { useState } from "react";

type MenuItemProps = {
    name: string;
    path?:string[];
    children?: MenuItemProps[];
    onSelect?: (name: string[]) => void;
};

const MenuItem = ({ name, children, onSelect
    ,path =[]
 }: MenuItemProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const hasChildren = children && children.length > 0;

    const currentPath = [...path,name]
    return (
        <li className="list-none">
            <div onClick={() => {
                onSelect(currentPath)
            }}
                className={`
                    flex items-center justify-between
                    rounded-xl
                    border
                    transition-all duration-200
                    ${
                        isOpen
                            ? "border-blue-500/30 bg-gray-700"
                            : "border-transparent hover:border-gray-600 hover:bg-gray-700"
                    }
                `}
            >
                <a
                    href="#"
                    className="
                        flex-1
                        px-4 py-3
                        text-sm font-medium
                        text-gray-200
                        transition-colors
                        hover:text-white
                    "
                >
                    {name}
                </a>

                <button
                    className="
                        mr-2
                        flex h-7 w-7
                        items-center justify-center
                        rounded-lg
                        text-gray-400
                        transition-all duration-200
                        hover:bg-gray-600
                        hover:text-white
                    "
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(!isOpen)}}
                >
                    <span
                        className={`
                            text-xs
                            transition-transform duration-200
                            ${isOpen ? "rotate-90" : ""}
                        `}
                    >
                        {isOpen ? "▼" : "▶"}
                    </span>
                </button>
            </div>

            {hasChildren && isOpen && (
                <ul className="ml-4 mt-1 border-l border-gray-600 pl-2">
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
