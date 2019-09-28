export interface ProducerI {
    name: string,
    address: string,
}

export default class Producer implements ProducerI {
    name: string
    address: string
    id: number
    created_at: Date

    constructor(data: any) {
        this.name = data.name;
        this.address = data.address;
        this.id = data.id;
        this.created_at = new Date(data.created_at);
    }
}