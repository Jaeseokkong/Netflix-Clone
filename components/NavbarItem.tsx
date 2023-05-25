import React from 'react';

interface NavberItemProps {
    label : string;
}

const NavbarItem : React.FC<NavberItemProps> = ({
    label
}) => {
    return (
        <div className="text-white cursor-pointer hover:text-gray-300 tansition">
            {label}
        </div>
    )
}

export default NavbarItem;