import { FileParser } from './Controllers/FileParser.js';

let myArgs = process.argv.slice(2); // getting the relevant commandline arguments
FileParser(myArgs[0])().then(res => {
    console.log(res);
});
