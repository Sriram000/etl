import { flatten } from './lib.mjs';

const denormalize = (renderData) => {
    const { shopNames, itemPrices } = renderData;
    
    const denormalized = itemPrices.map((itemPrice) => {
        const { item, shopPrices } = itemPrice;
        
        const items = shopPrices.map((shopPrice, i) => {
            const { price } = shopPrice;
            const shopName = shopNames[i];
            
            return {
                shopName,
                item,
                price,
            }
            
            
        });
        
        return items.filter((prices) => prices.price !== "-");
    });
    
    return flatten(denormalized);
}

const reverseData = (renderData) => {
    const denormalized = denormalize(renderData);
    const { shopNames } = renderData;
    
    return shopNames.map((shopName) => {         
        const filtered = denormalized.filter((shop) => shop.shopName === shopName);
        const items = filtered.map((data) => {
            const { item, price } = data;
            
            return {
                item,
                price,
            }
        });      
        
        return {
            shopName,
            items,
        }
    });
}

export default reverseData;