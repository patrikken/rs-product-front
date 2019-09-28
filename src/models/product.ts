import { string } from "prop-types";
import Producer, { ProducerI } from "./producer";
import StringFunction from "../Utils/StringFunctions";

export interface ProductI {
    name: string,
    price: number,
    description: string,
    logo: string,
    id: number,
    producer: ProducerI | any
}

export default class Product implements ProductI {
    name: string
    price: number
    description: string
    producer: ProducerI | null
    logo: string
    id: number
    constructor(data: any, producer: any) {
        this.name = data.name;
        this.price = data.price;
        this.description = data.description;
        this.producer = new Producer(producer);
        this.logo = data.logo ? StringFunction.getImageUrlFromApi(data.logo.url) : '';
        this.id = data.id;
    }

    /*  setProducer(producer: ProductI) {
         this.producer = producer;
     } */

    getPrice(localtion: string): number {
        return this.price;
    }
}