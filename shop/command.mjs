import shops from './shops.mjs';
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

    const items = denormalized.filter((items) => items.item === item);
    const result = {};
    
    items.map((data) => {
        const { shopName, price } = data;
        if(price === minimumPrices[item]) {
            result[shopName] = price;
        }
    })

    return result;
}

const bestItems = (shopName) => {
    const denormalized = denormalizeShops(shops);
    const priceMatrix = buildShopPriceMatrix(denormalized);
    const minimumPrices = getMinimumPrices(priceMatrix);

    const items = denormalized.filter((items) => items.shopName === shopName);
    const result = {};
    
    items.map((data) => {
        const { item, price } = data;
        if(price === minimumPrices[shopName]) {
            result[item] = price;
        }
    })

    return result;
}

export { item, shop, bestShops, bestItems };