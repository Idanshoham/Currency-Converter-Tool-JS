import { getConvertedFromCurrencyValues } from '../Controllers/FileParser.js';

jest.mock('../Services/CurrencyConverterService.js');
const mockCurrencyConverterService = jest.fn().mockResolvedValue(3.5);

test('call file parser with the standard file name', () => {
  /*
    standard file:
    USD
    ILS
    1.0
    5.0
    10.5
  */
  return expect(getConvertedFromCurrencyValues('Currencies', mockCurrencyConverterService)).resolves.toStrictEqual([ 3.5, 17.5, 36.75 ]);
});

test('call file parser with the an empty file', () => {
  /*
    empty file:
    USD
    ILS
  */
  return expect(getConvertedFromCurrencyValues('CurrenciesEmpty', mockCurrencyConverterService)).resolves.toStrictEqual([]);
});