import { getConvertedFromCurrencyValues } from './Services/FileParser.js';
import { getCoversionRate } from './Services/CurrencyConverterService.js';

const getResults = async () => {
    try {
        let myArgs = process.argv.slice(2); // getting the relevant commandline arguments
        console.log('before:');
        const result = await getConvertedFromCurrencyValues(myArgs[0], getCoversionRate);
        console.log('after:');
        console.log(result);
    } catch(err) {
        console.log("Something went wrong: ", err);
    }
}
getResults();
