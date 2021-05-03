import  {item, shop, minimum} from './command.mjs';

const testItem = () => {
    const result = item("Apple");
    console.log(result);
}

const testShop = () => {
    const result = shop("shop2");
    console.log(result); 
}

const testMinimum = () => {
    const result = minimum("20");
    console.log(result);
}

testItem();
testShop();
testMinimum();

