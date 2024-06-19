/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from "axios";

import {
  IWeatherApi,
  IWeatherApiResponse
} from "./../../../app/interfaces/IOpenWeatherApi";

export class OpenWeatherApi implements IWeatherApi {
  async getWeather (
    latitude: number,
    longitude: number
  ): Promise<IWeatherApiResponse> {
    const { data: responseData } = await axios.get<IWeatherApiResponse>(
      `${process.env.OPEN_WEATHER_API_URL}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude={minutely,hourly,alerts}&appid=${process.env.OPEN_WEATHER_API_KEY}`
    );
    console.log("Weather REsponse", responseData);
    return responseData;
  }
}
