export interface IPagination {
  page: number
  pages: number
  per_page: number
  total: number
  sourceid: string
  lastupdated: string
}

export interface IData {
  indicator: {
    id: string
    value: string
  }
  country: {
    id: string
    value: string
  }
  countryiso3code: string
  date: string
  value?: number
  unit: string
  obs_status: string
  decimal: number
}
export interface IBankApiResponse {
  data: IData
}

export interface IBankDataApi {
  getPibPerCapitalDataByCountry: (
    countryCode: string
  ) => Promise<IBankApiResponse>
  getPopulationDataByCountry: (
    countryCode: string
  ) => Promise<IBankApiResponse>
}
