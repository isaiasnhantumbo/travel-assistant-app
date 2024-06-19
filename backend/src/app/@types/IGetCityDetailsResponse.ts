import { IExchangeApiResponse } from "../interfaces/IExchangeApi";
import { IWeatherApiResponse } from "../interfaces/IOpenWeatherApi";
import { IGetOpenBankDataByCountryResponse } from "./IGetOpenBankDataByCountryResponse";

export interface IGetCityDetailsResponse
  extends IGetOpenBankDataByCountryResponse {
  weather: IWeatherApiResponse
  exchange: IExchangeApiResponse
}
