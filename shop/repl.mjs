import promptSync from 'prompt-sync';
import  { item, shop, bestShops, bestItems } from './command.mjs';
import { dictToLines } from './lib.mjs';

const prompt = promptSync();

const Actions = {
    "item": item,
    "shop": shop,
    "bestShops": bestShops,
    "bestItems": bestItems,
}

const getHelpText = (command) => "Unknown command: " + command 
    +  "\n\nAvailable Commands:\n  " 
    +  Object.keys(Actions).join("\n  ");

const main = function() {
    
    while(true) {
        const command = prompt(">");
        if(command ==="exit") {
            console.log("Thankyou");
            break;
        }
        else {
            const action = Actions[command];

            const result = action !== undefined 
                ? dictToLines(action(prompt("param:"))) 
                : getHelpText(command);
                
            console.log(result);
        }     
    }
}

main();