export interface CartItem {
    quantity: Number;
    product: Object;
    lineTotal: Number;
    ItemMeta: Object;
}
export interface CartItems {
    (index: Number): CartItem;
}
