import  {item, shop, bestShops} from './command.mjs';

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

testItem();
testShop();
testBestShops();

