import commands from './command.mjs';
import { dictToLines } from './lib.mjs';
import getHelpText from './getHelpText.mjs';

const execute = (command, param) => {
    const action = commands[command];

    const result = action !== undefined 
        ? dictToLines(action(param)) 
        : getHelpText(command);

    return result;
}

export default execute;