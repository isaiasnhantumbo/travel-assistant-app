import axios from "axios";

import {
  IBankApiResponse,
  IBankDataApi
} from "./../../../app/interfaces/IOpenBankDataApi";

/* eslint-disable @typescript-eslint/restrict-template-expressions */

export class OpenBankApi implements IBankDataApi {
  async getPopulationDataByCountry (
    countryCode: string
  ): Promise<IBankApiResponse> {
    const { data: responseData } = await axios.get<IBankApiResponse>(
      `${process.env.OPEN_BANK_API_URL}/v2/countries/${countryCode}/indicators/SP.POP.TOTL?format=json`
    );
    console.log("getPopulationDataByCountry REsponse", responseData);
    return responseData;
  }

  async getPibPerCapitalDataByCountry (
    countryCode: string
  ): Promise<IBankApiResponse> {
    const { data: responseData } = await axios.get<IBankApiResponse>(
      `${process.env.OPEN_BANK_API_URL}/v2/countries/${countryCode}/indicators/NY.GDP.MKTP.CD?format=json`
    );
    console.log("getPibPerCapitalDataByCountry REsponse", responseData);
    return responseData;
  }
}
