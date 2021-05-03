import { flatten } from './lib.mjs';

const denormalizeShops = (shops) => flatten(
    shops.map((shops) => {
        const { shopName, items} = shops;
        
        return items.map((item) => ({
            shopName, ...item,
        }));
    })
); 
    
export default denormalizeShops;