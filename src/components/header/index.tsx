import React from 'react';
import './style.css';

interface Props {
}

const Header: React.FC<Props> = () => {
    return (
        <div className="Holder">
            <div className="Content">
                <span>Shop</span>
            </div>

        </div>
    );
}

export default Header;