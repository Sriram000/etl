const flatten = (data) => [].concat.apply([], data);

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

    const getShopDetails = (shopName) => {
        const isCurrentShopItem = (shop) => shop.shopName === shopName;
        const selectNeededKey = (data) => {
            const { item, price } = data;

            return {
                item,
                price,
            }
        }

    const filtered = denormalized.filter(isCurrentShopItem);
    const items = filtered.map(selectNeededKey);

    return {
        shopName,
        items,
    }

    }

    return shopNames.map(getShopDetails);
}

export default reverseData;