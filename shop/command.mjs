import shops from './shops.mjs';
import { matrix } from "./lib.mjs";
import buildItemPriceMatrix from './buildItemPriceMatrix.mjs';
import buildShopPriceMatrix from './buildShopPriceMatrix.mjs';
import denormalizeShops from './denormalizeShops.mjs';
import getMinimumPrices from './getMinimumPrices.mjs';

const item = (item) => {
    const denormalized = denormalizeShops(shops);
    const priceMatrix = buildItemPriceMatrix(denormalized);
    
    return priceMatrix[item];
}

const shop = (shop) => {
    const denormalized = denormalizeShops(shops);
    const priceMatrix = buildShopPriceMatrix(denormalized);

    return priceMatrix[shop];
}

const bestShops = (item) => {
    const denormalized = denormalizeShops(shops);
    const priceMatrix = buildItemPriceMatrix(denormalized);
    const minimumPrices = getMinimumPrices(priceMatrix);

    const filtered = denormalized.filter((items) =>
        items.item === item && item.price === minimumPrices[item]);
    const result = {};
    
    return matrix(filtered, 'shopName', 'price');;
}

const bestItems = (shopName) => {
    const denormalized = denormalizeShops(shops);
    const priceMatrix = buildShopPriceMatrix(denormalized);
    const minimumPrices = getMinimumPrices(priceMatrix);

    const filtered = denormalized.filter((item) =>
        item.shopName === shopName && item.price === minimumPrices[shopName]);
    
    return matrix(filtered, 'item', 'price');
}

export { item, shop, bestShops, bestItems };