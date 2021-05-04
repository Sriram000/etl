import commands from './command.mjs';

const getHelpText = (command) => "Unknown command: " + command 
    +  "\n\nAvailable Commands:\n  " 
    +  Object.keys(commands).join("\n  ");

export default getHelpText;