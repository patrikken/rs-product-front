export interface ProducerI {
    name: string,
    address: string,
}

export default class Producer implements ProducerI {
    name: string
    address: string

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address
    }
}