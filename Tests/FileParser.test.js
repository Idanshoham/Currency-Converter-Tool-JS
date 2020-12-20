jest.mock('../Services/CurrencyConverterService.js');

import { getConvertedFromCurrencyValues } from '../Controllers/FileParser.js';

test('call file parser with the standard file name', () => {
  /*
    standard file:
    USD
    ILS
    1.0
    5.0
    10.5
  */
  getConvertedFromCurrencyValues('Currencies')
    .then(result => {
      expect(result).toBe([ 3.5, 17.5, 36.75 ]);
  });
});

test('call file parser with the an empty file', () => {
  /*
    empty file:
    USD
    ILS
  */
  getConvertedFromCurrencyValues('Currencies')
    .then(result => {
      expect(result).toBe([]);
  });
});