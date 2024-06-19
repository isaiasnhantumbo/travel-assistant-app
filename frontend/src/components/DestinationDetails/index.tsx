import { format, fromUnixTime } from 'date-fns';

import { Container, TemperatureValue } from './styles';

interface IDestinationDetailsProps {
  text: string;
  value: number;
}

export function DestinationDetails({ text, value }: IDestinationDetailsProps) {
  // const formattedWeekDay = format(fromUnixTime(weekDay), 'EEE,dd LLL');
  // const formattedMinTemperature = Math.floor(minTemperature / 10);
  // const formattedMaxTemperature = Math.floor(maxTemperature / 10);

  return (
    <Container>
      <h3>{text}</h3>

      <div className="temperatureValueContainer">
        <TemperatureValue>{value}</TemperatureValue>
      </div>
    </Container>
  );
}
