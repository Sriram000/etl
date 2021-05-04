import { flatten, matrix } from "./lib.mjs";

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

export {
    buildItemPriceMatrix, buildShopPriceMatrix,
    denormalizeShops, getMaximumPrices, getMinimumPrices,
};
