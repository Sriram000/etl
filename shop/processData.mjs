import {
    denormalizeShops, buildItemPriceMatrix, getMaximumPrices, getMinimumPrices
} from './helpers.mjs';

const processData = (shops) => {
    const shopNames = shops.map((shops) => shops.shopName);
    const denormalized = denormalizeShops(shops);
    const priceMatrix = buildItemPriceMatrix(denormalized);
    const minimumPrices = getMinimumPrices(priceMatrix);
    const maximumPrices = getMaximumPrices(priceMatrix);
    const itemNames = Object.keys(priceMatrix);
    const items = itemNames.map((itemName) => {
        const shopPrices = shopNames.map((shopName) => {
            const itemPrices = priceMatrix[itemName][shopName];
            const minimum = itemPrices === minimumPrices[itemName];
            const maximum = itemPrices === maximumPrices[itemName];
            const price = itemPrices !== undefined ? itemPrices : "-";
            
            return {
                price,
                minimum,
                maximum,
            }
        });

        return {
            item: itemName,
            shopPrices,
        }
    });

    return {
        shopNames,
        items,
    }
}

export default processData;