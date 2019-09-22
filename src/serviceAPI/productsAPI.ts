import HTTP from './HTTP';
import Routes from './Routes'
import Product from '../models/product';

export default class ProductAPI {
    static getProducts = async () => {
        const promise = new Promise<Array<Product>>(resolve => {
            HTTP.GET(Routes.GET_PRODUCTS).then(({ data, error }) => {
                if (data != null) {
                    const toRet = new Array<Product>();
                    data.products.map((item: any) => {
                        toRet.push(new Product(item.name, item.price, item.description, item.logo, item.id))
                    })
                    resolve(toRet)
                } else {
                    resolve(error)
                }
            })
        })
        return promise;
    }
}