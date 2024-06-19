/* eslint-disable import-helpers/order-imports */
import { IExchangeApi } from "src/app/interfaces/IExchangeApi";
import { IBankDataApi } from "src/app/interfaces/IOpenBankDataApi";
import { IWeatherApi } from "src/app/interfaces/IOpenWeatherApi";
import { container } from "tsyringe";

import { ExchangeRatesApi } from "./../../infrastructure/external-api/ExchangeRatesApi/index";
import { OpenBankApi } from "./../../infrastructure/external-api/OpenBankApi/index";
import { OpenWeatherApi } from "./../../infrastructure/external-api/OpenWeatherApi/index";
import { IGenericRepository } from "../../app/interfaces/IGenericRepository";
import { User } from "../../domain/User";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";

container.register<IGenericRepository<User>>("UserRepository", UserRepository);
container.register<IExchangeApi>("ExchangeApi", ExchangeRatesApi);
container.register<IWeatherApi>("WeatherApi", OpenWeatherApi);
container.register<IBankDataApi>("BankDataApi", OpenBankApi);
