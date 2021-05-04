import commands from './command.mjs';
import { dictToLines } from './lib.mjs';

var getHelpText = (command) => "Unknown command: " + command 
    +  "\n\nAvailable Commands:\n  " 
    +  Object.keys(commands).join("\n  ");

const main = () => {
    const command = process.argv[2];
    const param1 = process.argv[3];
    const action = commands[command];

    const result = action !== undefined 
        ? dictToLines(action(param1)) 
        : getHelpText(command);
        
    console.log(result);
}

main();