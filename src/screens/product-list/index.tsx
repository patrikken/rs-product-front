import React, { useState, Component } from 'react';
import './ProdList.css';
import ProductItem from '../../components/product-item';
import Product, { ProductI } from '../../models/product';
import ProductsAPI from '../../serviceAPI/productsAPI'

class ProductList extends Component<{}, { products: Array<Product> }>{
    componentWillMount() {
        this.setState({
            products: Array<Product>()
        })
    }

    componentDidMount() {
        ProductsAPI.getProductsStrapi().then(({ data, error }) => {
            if (!error) {
                this.setState({
                    products: data
                })
            } else {
                throw 'error when loading data'
            }
        })
    }

    render() {
        const products = this.state.products;
        return (
            <div className="ProdList">
                <div className="ListHolder">
                    {products.map((item) => {
                        console.log(item);
                        return <ProductItem key={item.id} product={item} />
                    })}
                </div>
            </div>
        );
    }

}


export default ProductList;
