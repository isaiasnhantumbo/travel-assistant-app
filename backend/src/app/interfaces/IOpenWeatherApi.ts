export interface IWeatherApiResponse {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: Current
  daily: Daily[]
}

export interface Current {
  dt: number
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  weather: Weather[]
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Daily {
  dt: number
  sunrise: number
  sunset: number
  moonrise: number
  moonset: number
  moon_phase: number
  temp: Temp
  pressure: number
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: Weather[]
  clouds: number
  pop: number
  uvi: number
  rain?: number
}

export interface Temp {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

export interface IWeatherApi {
  getWeather: (
    latitude: number,
    longitude: number
  ) => Promise<IWeatherApiResponse>
}
