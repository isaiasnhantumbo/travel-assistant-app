import {
  IExchangeApi,
  IExchangeApiResponse
} from "./../../../../app/interfaces/IExchangeApi";

export class ExchangeRatesApiMock implements IExchangeApi {
  async getCurrentExchangeRate (): Promise<IExchangeApiResponse> {
    return {
      success: true,
      timestamp: 1718823256,
      base: "EUR",
      date: "2024-06-19",
      rates: {
        MZ: 3.946105,
        AFN: 75.204752,
        ALL: 100.355075
      }
    };
  }
}
