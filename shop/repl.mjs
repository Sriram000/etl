import promptSync from 'prompt-sync';
import commands from './command.mjs';
import { dictToLines } from './lib.mjs';
import getHelpText from './getHelpText.mjs';

const prompt = promptSync();

const main = function() {
    
    while(true) {
        const command = prompt(">");
        if(command ==="exit") {
            console.log("Thankyou");
            break;
        }
        else {
            const action = commands[command];

            const result = action !== undefined 
                ? dictToLines(action(prompt("param:"))) 
                : getHelpText(command);
                
            console.log(result);
        }     
    }
}

main();