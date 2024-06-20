import { GetCurrencyExchange } from "./../../app/Currency/GetCurrencyExchange";
import { ExchangeRatesApiMock } from "./../../infrastructure/external-api/tests/ExchangeRatesApiMock";

describe("Get Currency Exchange Rates", () => {
  let getCurrencyExchange: GetCurrencyExchange;
  let exchangeRatesApiMock: ExchangeRatesApiMock;

  beforeEach(() => {
    exchangeRatesApiMock = new ExchangeRatesApiMock();
    getCurrencyExchange = new GetCurrencyExchange(exchangeRatesApiMock);
  });

  it("should return data", async () => {
    const exchangeData = await getCurrencyExchange.handle();

    expect(exchangeData).toBeDefined();
  });
});
