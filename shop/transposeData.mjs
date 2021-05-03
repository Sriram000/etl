import denormalizeShops from './denormalizeShops.mjs';
import { unique } from './lib.mjs';

const transposeData = (shops) => {
    const denormalized = denormalizeShops(shops);
    const itemNames = denormalized.map((data) => data.item);
    const uniqueItemNames = unique(itemNames);

    return uniqueItemNames.map((item) => {
        const filtered = denormalized.filter((data) => data.item === item);
        const shops = filtered.map((data) => {
            const { shopName, price } = data;

            return {
                shopName,
                price,
            }
        }); 

        return {
            item,
            shops,
        }
    });  
}

export default transposeData;