import { format, fromUnixTime } from 'date-fns';

import { Container, TemperatureValue } from './styles';

interface WeatherDaily {
  minTemperature: number;
  maxTemperature: number;
  weekDay: number;
}

interface WeatherDailyCardProps extends WeatherDaily {
  weatherState: {
    main: string;
    description: string;
    icon: string;
  };
}

export function WeatherDailyCard({
  maxTemperature,
  minTemperature,
  weatherState,
  weekDay,
}: WeatherDailyCardProps) {
  const formattedWeekDay = format(fromUnixTime(weekDay), 'EEE,dd LLL');
  const formattedMinTemperature = Math.floor(minTemperature / 10);
  const formattedMaxTemperature = Math.floor(maxTemperature / 10);

  return (
    <Container>
      <h4>{formattedWeekDay}</h4>

      <img
        src={`http://openweathermap.org/img/wn/${weatherState.icon}@2x.png`}
        alt={weatherState.description}
      />
      <div className="currency-list">
        <div className="temperatureValueContainer">
          <TemperatureValue isMinTemperature={false}>
            {formattedMaxTemperature}ºC
          </TemperatureValue>
          <TemperatureValue isMinTemperature>
            {formattedMinTemperature}ºC
          </TemperatureValue>
        </div>
      </div>
    </Container>
  );
}
