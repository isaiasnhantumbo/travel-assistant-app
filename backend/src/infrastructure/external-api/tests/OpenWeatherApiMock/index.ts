import {
  IWeatherApi,
  IWeatherApiResponse
} from "./../../../../app/interfaces/IOpenWeatherApi";
import { BadRequestError } from "./../../../../shared/errors/AppError";

export class OpenWeatherApiMock implements IWeatherApi {
  async getWeather (
    latitude: number,
    longitude: number
  ): Promise<IWeatherApiResponse> {
    if (latitude !== 1 && longitude !== 1) {
      throw new BadRequestError("Invalid");
    }
    return {
      lat: 38.7223,
      lon: -9.1393,
      timezone: "Europe/Lisbon",
      timezone_offset: 3600,
      current: {
        dt: 1718823267,
        sunrise: 1718773901,
        sunset: 1718827456,
        temp: 19.62,
        pressure: 1017,
        humidity: 66,
        dew_point: 13.1,
        uvi: 0.21,
        clouds: 20,
        feels_like: 122,
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d"
          }
        ]
      },
      daily: [
        {
          dt: 1718798400,
          sunrise: 1718773901,
          sunset: 1718827456,
          moonrise: 1718819880,
          moonset: 1718765280,
          moon_phase: 0.41,
          temp: {
            day: 21.21,
            min: 15.13,
            max: 21.62,
            night: 17.78,
            eve: 19.62,
            morn: 15.34
          },

          pressure: 1015,
          humidity: 53,
          dew_point: 11.28,
          wind_speed: 6.49,
          wind_deg: 330,
          wind_gust: 10.5,
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10d"
            }
          ],
          clouds: 16,
          pop: 1,
          rain: 2.91,
          uvi: 7.06
        },
        {
          dt: 1718884800,
          sunrise: 1718860311,
          sunset: 1718913871,
          moonrise: 1718910300,
          moonset: 1718853840,
          moon_phase: 0.45,
          temp: {
            day: 20.8,
            min: 15.86,
            max: 21.09,
            night: 16.06,
            eve: 19.71,
            morn: 16.28
          },

          pressure: 1020,
          humidity: 57,
          dew_point: 11.87,
          wind_speed: 6.75,
          wind_deg: 335,
          wind_gust: 10.03,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d"
            }
          ],
          clouds: 95,
          pop: 0,
          uvi: 6.28
        },
        {
          dt: 1718971200,
          sunrise: 1718946723,
          sunset: 1719000283,
          moonrise: 1719000600,
          moonset: 1718942940,
          moon_phase: 0.48,
          temp: {
            day: 24.9,
            min: 15.64,
            max: 25.34,
            night: 16.58,
            eve: 21.66,
            morn: 15.7
          },

          pressure: 1022,
          humidity: 43,
          dew_point: 11.56,
          wind_speed: 7.18,
          wind_deg: 341,
          wind_gust: 12.25,
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d"
            }
          ],
          clouds: 1,
          pop: 0,
          uvi: 9.27
        },
        {
          dt: 1719057600,
          sunrise: 1719033136,
          sunset: 1719086694,
          moonrise: 1719090480,
          moonset: 1719032700,
          moon_phase: 0.5,
          temp: {
            day: 27.11,
            min: 15.17,
            max: 27.32,
            night: 19.26,
            eve: 23.58,
            morn: 15.51
          },

          pressure: 1021,
          humidity: 37,
          dew_point: 11.6,
          wind_speed: 8.1,
          wind_deg: 354,
          wind_gust: 13.46,
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03d"
            }
          ],
          clouds: 48,
          pop: 0,
          uvi: 9.01
        },
        {
          dt: 1719144000,
          sunrise: 1719119551,
          sunset: 1719173103,
          moonrise: 1719179820,
          moonset: 1719123000,
          moon_phase: 0.55,
          temp: {
            day: 30,
            min: 17.47,
            max: 30,
            night: 23.07,
            eve: 27.26,
            morn: 17.48
          },

          pressure: 1015,
          humidity: 37,
          dew_point: 13.41,
          wind_speed: 5.85,
          wind_deg: 333,
          wind_gust: 12.41,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d"
            }
          ],
          clouds: 96,
          pop: 0,
          uvi: 8.98
        },
        {
          dt: 1719230400,
          sunrise: 1719205968,
          sunset: 1719259510,
          moonrise: 1719268680,
          moonset: 1719213780,
          moon_phase: 0.59,
          temp: {
            day: 31.29,
            min: 19.96,
            max: 31.51,
            night: 20.81,
            eve: 25.82,
            morn: 20.01
          },

          pressure: 1011,
          humidity: 40,
          dew_point: 15.71,
          wind_speed: 5.02,
          wind_deg: 317,
          wind_gust: 6.73,
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d"
            }
          ],
          clouds: 2,
          pop: 0,
          uvi: 8.74
        },
        {
          dt: 1719316800,
          sunrise: 1719292387,
          sunset: 1719345916,
          moonrise: 0,
          moonset: 1719304680,
          moon_phase: 0.62,
          temp: {
            day: 27.27,
            min: 18.5,
            max: 27.27,
            night: 18.5,
            eve: 21.5,
            morn: 18.78
          },

          pressure: 1011,
          humidity: 49,
          dew_point: 15.29,
          wind_speed: 7.13,
          wind_deg: 323,
          wind_gust: 12.87,
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d"
            }
          ],
          clouds: 0,
          pop: 0,
          uvi: 9
        },
        {
          dt: 1719403200,
          sunrise: 1719378807,
          sunset: 1719432319,
          moonrise: 1719357060,
          moonset: 1719395520,
          moon_phase: 0.66,
          temp: {
            day: 21.78,
            min: 17.86,
            max: 22.33,
            night: 17.98,
            eve: 20.32,
            morn: 17.86
          },

          pressure: 1012,
          humidity: 61,
          dew_point: 13.95,
          wind_speed: 6.42,
          wind_deg: 335,
          wind_gust: 12.63,
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d"
            }
          ],
          clouds: 100,
          pop: 0,
          uvi: 9
        }
      ]
    };
  }
}
