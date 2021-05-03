const buildShopPriceMatrix = (denormalized) => {
    const priceMatrix = {};

    denormalized.map((items) => {
        const { shopName, item, price} = items;
        priceMatrix[shopName] = priceMatrix[shopName] || {};
        priceMatrix[shopName][item] = price;
    });

    return priceMatrix;
}

export default buildShopPriceMatrix;