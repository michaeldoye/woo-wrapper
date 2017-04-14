export declare class WooApiService {
    private config;
    woo: any;
    constructor(config: any);
    fetchItems(itemType: string): Promise<any>;
    getCustomer(customerId: Number): void;
    createCustomer(user: any): void;
    updateCustomer(user: any): void;
    createOrder(items: Array<any>): void;
    updateOrder(orderId: Number): void;
}
