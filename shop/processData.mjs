import {
    denormalizeShops, buildItemPriceMatrix, getMaximumPrices, getMinimumPrices
} from './helpers.mjs';

const processData = (shops) => {
    const shopNames = shops.map((shops) => shops.shopName);
    const denormalized = denormalizeShops(shops);
    const priceMatrix = buildItemPriceMatrix(denormalized);
    const itemNames = Object.keys(priceMatrix);
    const minimumPrices = getMinimumPrices(priceMatrix);
    const maximumPrices = getMaximumPrices(priceMatrix);
    
    return {
        shopNames,
        items: itemNames.map((itemName) => ({
            item: itemName,
            shopPrices: shopNames.map((shopName) => {
                const itemPrice = priceMatrix[itemName][shopName];
                
                return {
                    price: itemPrice !== undefined ? itemPrice : "-",
                    minimum: itemPrice === minimumPrices[itemName],
                    maximum: itemPrice === maximumPrices[itemName],
                }
            }),
        })),
    }
}

export default processData;