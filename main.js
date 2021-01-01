import { getConvertedFromCurrencyValues } from './Controllers/FileParser.js';
import { getSpecificRateBetween } from './Services/CurrencyConverterService.js';

const getResults = async () => {
    try {
        let myArgs = process.argv.slice(2); // getting the relevant commandline arguments
        console.log('before:');
        const result = await getConvertedFromCurrencyValues(myArgs[0], getSpecificRateBetween);
        console.log('after:');
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
getResults();
