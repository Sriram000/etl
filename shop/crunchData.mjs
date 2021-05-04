import {
    buildItemPriceMatrix, buildShopPriceMatrix,
    denormalizeShops, getMinimumPrices
} from './helpers.mjs';

const crunchData = (shops) => {
    const denormalized = denormalizeShops(shops);
    const itemPriceMatrix = buildItemPriceMatrix(denormalized);
    const shopPriceMatrix = buildShopPriceMatrix(denormalized);
    const itemMinimumPrices = getMinimumPrices(itemPriceMatrix);
    const shopMinimumPrices = getMinimumPrices(shopPriceMatrix);

    return {
        denormalized,
        itemPriceMatrix,
        shopPriceMatrix,
        itemMinimumPrices,
        shopMinimumPrices,
    }
}

export default crunchData;
