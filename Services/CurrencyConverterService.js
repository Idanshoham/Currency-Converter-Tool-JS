import axios from 'axios';
import { CURRENCY_CONVERTER_API_URL } from '../Constants/apiConstants.js';

export const getConversionRate = async (fromCurrency, toCurrency) => {
    const result = await axios.get(
        `${CURRENCY_CONVERTER_API_URL}?base=${fromCurrency}&symbols=${toCurrency}`
    );

    return result.data.rates[toCurrency];
}
