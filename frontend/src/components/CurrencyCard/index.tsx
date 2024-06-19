import { format, fromUnixTime } from 'date-fns';

import { Container, TemperatureValue } from './styles';

// interface WeatherDaily {
//   minTemperature: number;
//   maxTemperature: number;
//   weekDay: number;
// }

// interface WeatherDailyCardProps extends WeatherDaily {
//   weatherState: {
//     main: string;
//     description: string;
//     icon: string;
//   };
// }

export function CurrencyCard() {
  // const formattedWeekDay = format(fromUnixTime(weekDay), 'EEE,dd LLL');
  // const formattedMinTemperature = Math.floor(minTemperature / 10);
  // const formattedMaxTemperature = Math.floor(maxTemperature / 10);

  return (
    <Container>
      <h3>Cambio</h3>

      <div className="currency-list">
        <div className="temperatureValueContainer">
          <h4>USD</h4>
          <TemperatureValue isMinTemperature>75.8</TemperatureValue>
        </div>
        <div className="temperatureValueContainer">
          <h4>EUR</h4>
          <TemperatureValue isMinTemperature>75.8</TemperatureValue>
        </div>
      </div>
    </Container>
  );
}
