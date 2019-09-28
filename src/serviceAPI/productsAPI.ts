import HTTP from './HTTP';
import Routes from './Routes'
import Product from '../models/product';

export default class ProductAPI {
    static getProducts = async () => {
        const promise = new Promise<{ data: Array<Product>, error: boolean }>(resolve => {
            HTTP.GET(Routes.GET_PRODUCTS).then(({ data, error }) => {
                if (data != null) {
                    const toRet = new Array<Product>();
                    data.products.map((item: any) => {
                        toRet.push(new Product(item, {}))
                    })
                    resolve({ data: toRet, error: false })
                } else {
                    resolve({ data: [], error: false })
                }
            })
        })
        return promise;
    }

    static getProductsStrapi = async () => {
        const promise = new Promise<{ data: Array<Product>, error: boolean }>(resolve => {
            HTTP.GET(Routes.GET_PRODUCTS2).then(({ data, error }) => {
                if (data != null) {
                    const toRet = new Array<Product>();
                    data.map((item: any) => {
                        toRet.push(new Product(item, item.producer))
                    })
                    resolve({ data: toRet, error: false })
                } else {
                    resolve({ data: [], error: false })
                }
            })
        })
        return promise;
    }
}