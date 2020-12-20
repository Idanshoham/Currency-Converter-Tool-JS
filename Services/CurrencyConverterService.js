import axios from 'axios';
import { CURRENCY_CONVERTER_API_URL } from '../Constants/apiConstants.js';

export const getSpecificRateBetween = async (base, symbol) => {
    try {
        return await axios.get(
            `${CURRENCY_CONVERTER_API_URL}?base=${base}&symbols=${symbol}`
        ).then(result => result.data.rates[symbol]);

    } catch(e) {
        console.log("Something went wrong: ", e);
    }
}
