import fs from 'fs';
import path from 'path';
import { getSpecificRateBetween } from '../Services/CurrencyConverterService.js';
import { FILES_PATH, FILE_EXTENSION_TXT } from '../Constants/fileConstants.js';

export default class FileParser {
    constructor(fileName) {
        this.fileName = fileName;

        this.getConvertedFromCurrencyValues = () => {
            let toValues = [];
            let fileFromValues = fs.readFileSync(path.resolve(FILES_PATH, this.fileName + FILE_EXTENSION_TXT), 'utf8');
            console.log('before:');
            console.log(fileFromValues);
            fileFromValues = fileFromValues.split('\r\n');
            let fromCurrency = fileFromValues[0], toCurrency = fileFromValues[1];
            fileFromValues = fileFromValues.slice(2);

            return getSpecificRateBetween(fromCurrency, toCurrency).then((res) => {
                let rate = res.data.rates[toCurrency];
                console.log('after:');
                fileFromValues.forEach(value => {
                    if (parseFloat(value))
                        toValues.push(value * rate);
                });

                return toValues;
            });
        };
    }
};