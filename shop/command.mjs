import buildItemPriceMatrix from './buildItemPriceMatrix.mjs';
import denormalizeShops from './denormalizeShops.mjs';
import shops from './shops.mjs';

const item = (item) => {
    const denormalized = denormalizeShops(shops);
    const priceMatrix = buildItemPriceMatrix(denormalized);
    
    return priceMatrix["Apple"];
}

const shop = () => {

    return ;

}

const minimum = () => {
    
    return {};

}

export {item, shop, minimum};