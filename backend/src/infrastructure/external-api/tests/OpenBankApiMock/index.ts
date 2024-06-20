import {
  IBankApiResponse,
  IBankDataApi
} from "./../../../../app/interfaces/IOpenBankDataApi";
import { BadRequestError } from "./../../../../shared/errors/AppError";

/* eslint-disable @typescript-eslint/restrict-template-expressions */

export class OpenBankApiMock implements IBankDataApi {
  async getPopulationDataByCountry (
    countryCode: string
  ): Promise<IBankApiResponse> {
    if (countryCode !== "" && countryCode === "MZ") {
      return {
        data: [
          {
            indicator: {
              id: "SP.POP.TOTL",
              value: "Population, total"
            },
            country: {
              id: "MZ",
              value: "Mozambique"
            },
            countryiso3code: "MOZ",
            date: "2023",
            value: null,
            unit: "",
            obs_status: "",
            decimal: 0
          },
          {
            indicator: {
              id: "SP.POP.TOTL",
              value: "Population, total"
            },
            country: {
              id: "MZ",
              value: "Mozambique"
            },
            countryiso3code: "MOZ",
            date: "2022",
            value: 32969518,
            unit: "",
            obs_status: "",
            decimal: 0
          }
        ]
      };
    } else {
      throw new BadRequestError("Error");
    }
  }

  async getPibPerCapitalDataByCountry (
    countryCode: string
  ): Promise<IBankApiResponse> {
    if (countryCode !== "" && countryCode === "MZ") {
      return {
        data: [
          {
            indicator: {
              id: "NY.GDP.MKTP.CD",
              value: "GDP (current US$)"
            },
            country: {
              id: "MZ",
              value: "Mozambique"
            },
            countryiso3code: "MOZ",
            date: "2023",
            value: null,
            unit: "",
            obs_status: "",
            decimal: 0
          },
          {
            indicator: {
              id: "NY.GDP.MKTP.CD",
              value: "GDP (current US$)"
            },
            country: {
              id: "MZ",
              value: "Mozambique"
            },
            countryiso3code: "MOZ",
            date: "2022",
            value: 18406835954.6695,
            unit: "",
            obs_status: "",
            decimal: 0
          }
        ]
      };
    } else {
      throw new BadRequestError("Error");
    }
  }
}
