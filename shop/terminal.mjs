import commands from './command.mjs';
import { dictToLines } from './lib.mjs';
import getHelpText from './getHelpText.mjs';

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