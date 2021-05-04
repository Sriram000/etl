import { matrix } from "./lib.mjs";

const buildShopPriceMatrix = (denormalized) => 
    matrix(denormalized, 'shopName', 'item', 'price');

export default buildShopPriceMatrix;