const getMinimumPrices = (priceMatrix) => {
    const minimumPrices = {};
    const itemNames = Object.keys(priceMatrix);

    itemNames.map((itemName) => {
        const shopPrices = Object.values(priceMatrix[itemName]);
        minimumPrices[itemName] = Math.min(...shopPrices);
    });

    return minimumPrices;
}

export default getMinimumPrices;