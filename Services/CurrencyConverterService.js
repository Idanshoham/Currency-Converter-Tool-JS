import axios from 'axios';
import { CURRENCY_CONVERTER_API_URL } from '../Constants/apiConstants.js';

export const getSpecificRateBetween = (fromCurrency, toCurrency) => {
    return axios.get(
        `${CURRENCY_CONVERTER_API_URL}?base=${fromCurrency}&symbols=${toCurrency}`
    ).then(result => result.data.rates[toCurrency]);
}
