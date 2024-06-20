import { GetOpenBankDataByCountry } from "./../../app/OpenBankData/GetOpenBankDataByCountry";
import { OpenBankApiMock } from "./../../infrastructure/external-api/tests/OpenBankApiMock/index";
import { BadRequestError } from "./../../shared/errors/AppError";

describe("Get Open Bank Data By Country", () => {
  let getOpenBankDataByCountry: GetOpenBankDataByCountry;
  let openBankApiMock: OpenBankApiMock;

  beforeEach(() => {
    openBankApiMock = new OpenBankApiMock();
    getOpenBankDataByCountry = new GetOpenBankDataByCountry(openBankApiMock);
  });

  it("should return data", async () => {
    const weatherData = await getOpenBankDataByCountry.handle("MZ");

    expect(weatherData).toBeDefined();
  });

  it("should throw BadRequestError for invalid country zone", async () => {
    await expect(getOpenBankDataByCountry.handle("")).rejects.toThrow(
      BadRequestError
    );
  });
});
