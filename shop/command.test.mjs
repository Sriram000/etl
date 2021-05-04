import commands from './command.mjs';

const {item, shop, bestShops, bestItems} = commands;

const testItem = () => {
    const result = item("Apple");
    console.log(result);
}

const testShop = () => {
    const result = shop("shop2");
    console.log(result); 
}

const testBestShops = () => {
    const result = bestShops("Carrot");
    console.log(result);
}

const testBestItems = () => {
    const result = bestItems("shop1");
    console.log(result);
}

testItem();
testShop();
testBestShops();
testBestItems();

