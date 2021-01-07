import { promises } from 'fs';
import { resolve } from 'path';
import { FILES_PATH, FILE_EXTENSION_TXT } from '../Constants/fileConstants.js';

export const getConvertedFromCurrencyValues = async (fileName, converterServiceGetRate) => {

    let fileFromValues = await promises.readFile(resolve(FILES_PATH, fileName + FILE_EXTENSION_TXT), 'utf8');
    console.log(fileFromValues);

    fileFromValues = fileFromValues.split(process.platform === 'win32' ? '\r\n' : '\n');
    const fromCurrency = fileFromValues[0];
    const toCurrency = fileFromValues[1];
    const rate = await converterServiceGetRate(fromCurrency, toCurrency);

    return fileFromValues.filter(strValue => !isNaN(strValue) && strValue.indexOf('.') != -1).map(value => {
        return value * rate;
    });
}
