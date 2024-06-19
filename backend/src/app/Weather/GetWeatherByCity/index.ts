import { inject, injectable } from "tsyringe";
import { z } from "zod";

import { BadRequestError } from "../../../shared/errors/AppError";
import {
  IWeatherApi,
  IWeatherApiResponse
} from "./../../interfaces/IOpenWeatherApi";
export const locationSchema = z.object({
  latitude: z.number(),
  longitude: z.number()
});
@injectable()
export class GetWeatherByCity {
  constructor (
    @inject("WeatherApi")
    private readonly weatherApi: IWeatherApi
  ) {}

  async handle (
    latitude: number,
    longitude: number
  ): Promise<IWeatherApiResponse> {
    const validateRequest = locationSchema.safeParse({
      latitude,
      longitude
    });
    if (!validateRequest.success) {
      throw new BadRequestError("latitude or longitude is Invalid");
    }

    const weatherData = await this.weatherApi.getWeather(latitude, longitude);
    return weatherData;
  }
}
