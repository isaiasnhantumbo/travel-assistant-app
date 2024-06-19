import { inject, injectable } from "tsyringe";
import { z } from "zod";

import { BadRequestError } from "../../../shared/errors/AppError";
import { IGetOpenBankDataByCountryResponse } from "../../@types/IGetOpenBankDataByCountryResponse";
import { IBankDataApi } from "./../../interfaces/IOpenBankDataApi";

const requestSchema = z.object({
  countryCode: z.string()
});
@injectable()
export class GetOpenBankDataByCountry {
  constructor (
    @inject("BankDataApi")
    private readonly bankDataApi: IBankDataApi
  ) {}

  async handle (
    countryCode: string
  ): Promise<IGetOpenBankDataByCountryResponse> {
    const validateRequest = requestSchema.safeParse({
      countryCode
    });
    if (!validateRequest.success) {
      throw new BadRequestError("countryCode is Invalid");
    }

    const pibPerCapitalData =
      await this.bankDataApi.getPibPerCapitalDataByCountry(countryCode);
    const populationData = await this.bankDataApi.getPopulationDataByCountry(
      countryCode
    );
    return { pibPerCapitalData, populationData };
  }
}
