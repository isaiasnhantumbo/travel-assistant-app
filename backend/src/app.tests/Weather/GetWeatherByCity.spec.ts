import { GetWeatherByCity } from "./../../app/Weather/GetWeatherByCity/index";
import { OpenWeatherApiMock } from "./../../infrastructure/external-api/tests/OpenWeatherApiMock/index";
import { BadRequestError } from "./../../shared/errors/AppError";

describe("Get Weather By City", () => {
  let getWeatherByCity: GetWeatherByCity;
  let mockWeatherApi: OpenWeatherApiMock;

  beforeEach(() => {
    mockWeatherApi = new OpenWeatherApiMock();
    getWeatherByCity = new GetWeatherByCity(mockWeatherApi);
  });

  it("should return weather data", async () => {
    const weatherData = await getWeatherByCity.handle(1, 1);

    expect(weatherData).toBeDefined();
  });

  it("should throw BadRequestError for invalid latitude or longitude", async () => {
    await expect(getWeatherByCity.handle(212, 0)).rejects.toThrow(
      BadRequestError
    );
  });
  it("should throw error for invalid latitude or longitude", async () => {
    await expect(getWeatherByCity.handle(2, 0)).rejects.toThrow(Error);
  });
});
