import promptSync from 'prompt-sync';
import execute from "./index.mjs";

const prompt = promptSync();

const main = function() {
    
    while(true) {
        const command = prompt(">");
        if(command ==="exit") {
            console.log("Thankyou");
            break;
        }
        else {
            const param = prompt("param:");
            const result = execute(command, param);
            console.log(result);
        }     
    }
}

main();