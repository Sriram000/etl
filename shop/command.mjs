import buildItemPriceMatrix from './buildItemPriceMatrix.mjs';
import buildShopPriceMatrix from './buildShopPriceMatrix.mjs';
import denormalizeShops from './denormalizeShops.mjs';
import shops from './shops.mjs';

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

const minimum = () => {
    
    return {};

}

export {item, shop, minimum};