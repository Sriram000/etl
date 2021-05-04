import { matrix } from "./lib.mjs";

const buildItemPriceMatrix = (denormalized) =>
    matrix(denormalized, 'item', 'shopName', 'price');

export default buildItemPriceMatrix;