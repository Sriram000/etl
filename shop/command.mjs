import shops from './shops.mjs';
import { matrix } from "./lib.mjs";
import crunchData from './crunchData.mjs';

const {
    denormalized,
    itemPriceMatrix,
    shopPriceMatrix,
    itemMinimumPrices,
    shopMinimumPrices,
} = crunchData(shops);

const item = (item) => itemPriceMatrix[item] || {};

const shop = (shop) => shopPriceMatrix[shop] || {};

const bestShops = (item) => matrix(
    denormalized.filter((data) =>
        data.item === item && data.price === itemMinimumPrices[item]),
    'shopName', 'price'
) || {};

const bestItems = (shopName) => {
    const filtered = denormalized.filter((data) =>
        data.shopName === shopName && data.price === shopMinimumPrices[shopName]);
    
    return matrix(filtered, 'item', 'price') || {};
}

const commands = {
    item,
    shop,
    bestShops,
    bestItems,
}

export default commands;