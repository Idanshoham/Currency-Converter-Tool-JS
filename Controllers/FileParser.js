import { readFileSync } from 'fs';
import { resolve } from 'path';
import { getSpecificRateBetween } from '../Services/CurrencyConverterService.js';
import { FILES_PATH, FILE_EXTENSION_TXT } from '../Constants/fileConstants.js';

export const getConvertedFromCurrencyValues = async (fileName) => {

    let fileFromValues = readFileSync(resolve(FILES_PATH, fileName + FILE_EXTENSION_TXT), 'utf8');
    console.log(fileFromValues);

    fileFromValues = fileFromValues.split('\r\n');
    const rate = await getSpecificRateBetween(fileFromValues[0], fileFromValues[1]);

    return fileFromValues.filter(strValue => !isNaN(strValue) && strValue.indexOf('.') != -1).map(value => {
        return value * rate;
    });
}
