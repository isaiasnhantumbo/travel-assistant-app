import {
  Body,
  Controller,
  Delete,
  Example,
  Get,
  Patch,
  Path,
  Post,
  Query,
  Route,
  Security,
  SuccessResponse,
  Tags
} from "tsoa";
import { container } from "tsyringe";

import { ICreateUser, UserDto } from "../../app/dtos/UserDto";
import { CreateUser } from "../../app/Users/CreateUser";
import { DeleteUser } from "../../app/Users/DeleteUser";
import { GetAllUsers } from "../../app/Users/GetAllUsers";
import { GetUserById } from "../../app/Users/GetUserById";
import { UpdateUser } from "../../app/Users/UpdateUser";
import { GetWeatherByCity } from "../../app/Weather/GetWeatherByCity";
import { IGetCityDetailsResponse } from "./../../app/@types/IGetCityDetailsResponse";
import { IGetCityPreviewResponse } from "./../../app/@types/IGetCityPreviewResponse";
import { GetCurrencyExchange } from "./../../app/Currency/GetCurrencyExchange/index";
import { GetOpenBankDataByCountry } from "./../../app/OpenBankData/GetOpenBankDataByCountry/index";

@Route("cities")
@Tags("Cities Routes")
export class CitiesController extends Controller {
  /**
   * Cities Information Routes
   */
  @Get("/preview")
  public async getCityByIdPreview (
    @Query() latitude: string,
      @Query() longitude: string
  ): Promise<IGetCityPreviewResponse> {
    const getWeather = container.resolve(GetWeatherByCity);
    const weather = await getWeather.handle(
      Number(latitude),
      Number(longitude)
    );
    return { weather };
  }

  @Security("jwt")
  @Get("/details")
  public async getCityById (
    @Query() latitude: string,
      @Query() longitude: string,
      @Query() country: string
  ): Promise<IGetCityDetailsResponse> {
    const getCityById = container.resolve(GetWeatherByCity);
    const weather = await getCityById.handle(
      Number(latitude),
      Number(longitude)
    );

    const getCurrencyExchange = container.resolve(GetCurrencyExchange);
    const exchange = await getCurrencyExchange.handle();

    const getOpenBankDataByCountry = container.resolve(
      GetOpenBankDataByCountry
    );
    const { pibPerCapitalData, populationData } =
      await getOpenBankDataByCountry.handle(country);
    return {
      weather,
      exchange,
      pibPerCapitalData,
      populationData
    };
  }
}
