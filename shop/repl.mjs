import promptSync from 'prompt-sync';
import commands from './command.mjs';
import { dictToLines } from './lib.mjs';

const prompt = promptSync();

const getHelpText = (command) => "Unknown command: " + command 
    +  "\n\nAvailable Commands:\n  " 
    +  Object.keys(commands).join("\n  ");

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