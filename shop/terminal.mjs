import execute from "./index.mjs";

const main = () => {
    const command = process.argv[2];
    const param = process.argv[3];

    const result = execute(command, param);

    console.log(result);
}

main();