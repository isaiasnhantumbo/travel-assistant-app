import { IBankApiResponse } from "../interfaces/IOpenBankDataApi";

export interface IGetOpenBankDataByCountryResponse {
  pibPerCapitalData: IBankApiResponse
  populationData: IBankApiResponse
}
