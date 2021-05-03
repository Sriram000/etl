const flatten = (data) => [].concat.apply([], data);

const getItems = (shops) => {
    const { shopName, items} = shops;

    return items.map((item) => ({
        shopName, ...item,
    }));
}

const denormalizeShops = (shops) => flatten(shops.map(getItems)); 

export default denormalizeShops;