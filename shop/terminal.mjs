import  { item, shop, bestShops, bestItems } from './command.mjs';

const Actions = {
    "item": item,
    "shop": shop,
    "bestShops": bestShops,
    "bestItems": bestItems,
}

var getHelpText = (command) => "Unknown command: " + command 
    +  "\n\nAvailable Commands:\n  " 
    +  Object.keys(Actions).join("\n  ");

const main = () => {
    const command = process.argv[2];
    const param1 = process.argv[3];
    const action = Actions[command];

    const result = action !== undefined 
        ? action(param1) 
        : getHelpText(command);
        
    console.log(result);
}

main();