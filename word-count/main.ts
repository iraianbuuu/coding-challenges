import fs from "node:fs/promises";

const args = process.argv.slice(2);
const command = args[0];
const flag = command[0];
const option = command[1];
const filePath = args[1];

if (flag != "-") {
    terminateProgram("Invalid Flag");
}


async function readFile(filePath: string) {
    try {
        const file = await fs.readFile(filePath);
        return file;
    } catch (error) {
        terminateProgram("Unable to read the contents inside the files");
    }
}

function terminateProgram(error: string) {
    console.error(error);
    process.exit(1);
}

let file = await readFile(filePath);
switch (option) {
    case 'c':
        if (!file) terminateProgram("Not able to read the bytes");
        console.log(file?.length + " " + filePath);
        break;
    default:
        console.error("Invalid command");
}