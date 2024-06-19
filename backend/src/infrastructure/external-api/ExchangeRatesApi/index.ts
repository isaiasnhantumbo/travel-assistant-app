/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from "axios";

import {
  IExchangeApi,
  IExchangeApiResponse
} from "../../../app/interfaces/IExchangeApi";

export class ExchangeRatesApi implements IExchangeApi {
  async getCurrentExchangeRate (): Promise<IExchangeApiResponse> {
    const { data: responseData } = await axios.get<IExchangeApiResponse>(
      `${process.env.EXCHANGE_RATES_API_URL}/v1/latest?access_key=${process.env.EXCHANGE_RATES_API}`
    );
    console.log("getCurrentExchangeRate REsponse", responseData);
    return responseData;
  }
}
