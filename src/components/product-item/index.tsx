import React, { useState } from 'react';
import './Product.css';
import { ProductI } from '../../models/product';

interface Props {
    product: ProductI
}

const ProductItem: React.FC<Props> = ({ product }) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className="Product">
            <div className="Product-mageHolder">
                <img className="Product-image" src={product.logo} />
            </div>
            <div className="Description-holder">
                <div className="Description">
                    <span className="Price">{product.price} $</span>
                    <div>
                        {product.name}
                        {visible && <div>
                            {product.description}
                        </div>}
                    </div>
                </div>
                <div>
                    <button onClick={() => setVisible(!visible)}>{visible ? '-' : '+'}</button>
                </div>
            </div>



        </div>
    );
}

export default ProductItem;