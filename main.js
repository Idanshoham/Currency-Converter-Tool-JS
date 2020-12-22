import { getConvertedFromCurrencyValues } from './Controllers/FileParser.js';
import { getSpecificRateBetween } from './Services/CurrencyConverterService.js';

let myArgs = process.argv.slice(2); // getting the relevant commandline arguments
console.log('before:');
getConvertedFromCurrencyValues(myArgs[0], getSpecificRateBetween)
    .then(result => {
        console.log('after:');
        console.log(result);
    });
