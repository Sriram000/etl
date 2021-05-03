const flatten = (data) => [].concat.apply([], data);

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

const buildPriceMatrix = (denormalized) => {
    const priceMatrix = {};

    denormalized.map((items) => {
        const { shopName, item, price} = items;
        priceMatrix[item] = priceMatrix[item] || {};
        priceMatrix[item][shopName] = price;
    });

    return priceMatrix;
}

const getItems = (shops) => {
    const { shopName, items} = shops;

    return items.map((item) => ({
        shopName, ...item,
    }));
}

const denormalize = (shops) => flatten(shops.map(getItems)); 

const getShopName = (shops) => shops.shopName; 

const processData = (shops) => {
    const shopNames = shops.map(getShopName);
    const denormalized = denormalize(shops);
    const priceMatrix = buildPriceMatrix(denormalized);
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