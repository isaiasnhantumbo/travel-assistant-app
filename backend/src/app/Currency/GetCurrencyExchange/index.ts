import { inject, injectable } from "tsyringe";

import {
  IExchangeApi,
  IExchangeApiResponse
} from "../../../app/interfaces/IExchangeApi";

@injectable()
export class GetCurrencyExchange {
  constructor (
    @inject("ExchangeApi")
    private readonly exchangeApi: IExchangeApi
  ) {}

  async handle (): Promise<IExchangeApiResponse> {
    const exchangeData = await this.exchangeApi.getCurrentExchangeRate();
    return exchangeData;
  }
}
