import  { item, shop, bestShops, bestItems } from './command.mjs';

const Actions = {
    "item": item,
    "shop": shop,
    "bestShops": bestShops,
    "bestItems": bestItems,
}

var getHelpText = function(command) {
    
    let helpText = "Unknown command: " + command +  "\n\nAvailable Commands:\n";
    var availableCommands = Object.keys(Actions);
    availableCommands.forEach(element => helpText += "  " + element +  "\n");

    return helpText;
}

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