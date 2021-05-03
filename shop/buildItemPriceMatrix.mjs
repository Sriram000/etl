const buildItemPriceMatrix = (denormalized) => {
    const priceMatrix = {};

    denormalized.map((items) => {
        const { shopName, item, price} = items;
        priceMatrix[item] = priceMatrix[item] || {};
        priceMatrix[item][shopName] = price;
    });

    return priceMatrix;
}

export default buildItemPriceMatrix;