import axios from 'axios';
import { CURRENCY_CONVERTER_API_URL} from '../Constants/apiConstants.js';

export async function getSpecificRateBetween(base, symbol) {
    try {
        const response = await axios.get(
            `${CURRENCY_CONVERTER_API_URL}?base=${base}&symbols=${symbol}`
        );

        return response;
    } catch(e) {
        console.log("Something went wrong:", e);
    }
}
