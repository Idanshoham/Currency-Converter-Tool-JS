import fs from 'fs';
import path from 'path';
import { getSpecificRateBetween } from '../Services/CurrencyConverterService.js';
import { FILES_PATH, FILE_EXTENSION_TXT } from '../Constants/fileConstants.js';

export const FileParser = (fileName) => {

    const getConvertedFromCurrencyValues = async () => {
        let toValues = [];
        let fileFromValues = fs.readFileSync(path.resolve(FILES_PATH, fileName + FILE_EXTENSION_TXT), 'utf8');
        console.log('before:');
        console.log(fileFromValues);

        fileFromValues = fileFromValues.split('\r\n');
        const fromCurrency = fileFromValues[0], toCurrency = fileFromValues[1];
        fileFromValues = fileFromValues.slice(2);

        const res = await getSpecificRateBetween(fromCurrency, toCurrency);
        const rate = res.data.rates[toCurrency];

        console.log('after:');
        fileFromValues.forEach(value => {
            if (parseFloat(value))
                toValues.push(value * rate);
        });

        return toValues;
    };

    return getConvertedFromCurrencyValues;
};