import { flatten, matrix } from "./lib.mjs";
import utils from '@laufire/utils';

const { map, values } = utils.collection;

const buildItemPriceMatrix = (denormalized) =>
    matrix(denormalized, 'item', 'shopName', 'price');

const buildShopPriceMatrix = (denormalized) => 
    matrix(denormalized, 'shopName', 'item', 'price');

const denormalizeShops = (shops) => flatten(
    shops.map((shops) => {
        const { shopName, items} = shops;
        
        return items.map((item) => ({
            shopName, ...item,
        }));
    })
); 
  
const getMinimumPrices = (priceMatrix) =>
    map(priceMatrix, (prices) => Math.min(...values(prices)));

const getMaximumPrices = (priceMatrix) =>
    map(priceMatrix, (prices) => Math.max(...values(prices)));

export {
    buildItemPriceMatrix, buildShopPriceMatrix,
    denormalizeShops, getMaximumPrices, getMinimumPrices,
};
