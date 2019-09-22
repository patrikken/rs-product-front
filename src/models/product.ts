import { string } from "prop-types";
import Producer, { ProducerI } from "./producer";

export interface ProductI {
    name: string,
    price: number,
    description: string,
    logo: string,
    id: number
}

export default class Product implements ProductI {
    name: string
    price: number
    description: string
    producer: ProducerI | null
    logo: string
    id: number
    constructor(name: string, price: number, description: string, logo: string, id: number, producer: ProducerI | null = null) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.producer = producer;
        this.logo = logo;
        this.id = id;
    }

    /*  setProducer(producer: ProductI) {
         this.producer = producer;
     } */

    getPrice(localtion: string): number {
        return this.price;
    }
}