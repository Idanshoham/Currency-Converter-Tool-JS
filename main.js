import FileParser from './Controllers/FileParser.js';

let myArgs = process.argv.slice(2);
new FileParser(myArgs[0]).getConvertedFromCurrencyValues().then(res => {
    console.log(res);
});
