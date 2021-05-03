import denormalizeShops from './denormalizeShops.mjs';
import buildItemPriceMatrix from './buildItemPriceMatrix.mjs';

const getMinimumPrices = (priceMatrix) => {
    const minimumPrices = {};
    const itemNames = Object.keys(priceMatrix);

    itemNames.map((itemName) => {
        const shopPrices = Object.values(priceMatrix[itemName]);
        minimumPrices[itemName] = Math.min(...shopPrices);
    });

    return minimumPrices;
}

const getMaximumPrices = (priceMatrix) => {
    const maximumPrices = {};
    const itemNames = Object.keys(priceMatrix);

    itemNames.map((itemName) => {
        const shopPrices = Object.values(priceMatrix[itemName]);
        maximumPrices[itemName] = Math.max(...shopPrices);
    });

    return maximumPrices;
}

const getShopName = (shops) => shops.shopName; 

const processData = (shops) => {
    const shopNames = shops.map(getShopName);
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