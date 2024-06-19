export interface IExchangeApiResponse {
  success: boolean
  timestamp: number
  base: string
  date: string
  rates: Array<{
    [currency: string]: number
  }>
}

export interface IExchangeApi {
  getCurrentExchangeRate: () => Promise<IExchangeApiResponse>
}
