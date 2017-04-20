export interface CartItem {
    quantity: Number;
    product: Object;
    lineTotal: Number;
    itemMeta: Object;
}
export interface CartItems {
    (index: Number): CartItem;
}
