export interface IExchangeApiResponse {
  success: boolean
  timestamp: number
  base: string
  date: string
  rates: any
}

export interface IExchangeApi {
  getCurrentExchangeRate: () => Promise<IExchangeApiResponse>
}
