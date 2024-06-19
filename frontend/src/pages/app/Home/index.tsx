import ContentLoader from 'react-content-loader';

import { CurrencyCard } from '../../../components/CurrencyCard';
import { DestinationDetails } from '../../../components/DestinationDetails';
import { WeatherDailyCard } from '../../../components/WeatherDailyCard';
import { useSharedData } from '../../../hooks/useSharedData';
import {
  Container,
  DestinationDetailsContainer,
  WeatherListContainer,
} from './styles';

export function Home() {
  const { shared } = useSharedData();
  return (
    <Container>
      <h1>Temperatura</h1>
      <section>
        <WeatherListContainer>
          {shared?.weather?.daily.map((current) => (
            <WeatherDailyCard
              key={current.dt}
              maxTemperature={current.temp.max}
              weatherState={{
                main: current.weather[0].main,
                description: current.weather[0].description,
                icon: current.weather[0].icon,
              }}
              minTemperature={current.temp.min}
              weekDay={current.dt}
            />
          ))}
          {!shared && (
            <ContentLoader
              speed={4}
              width={300}
              height={300}
              viewBox="0 0 400 300"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="184" y="46" rx="2" ry="2" width="152" height="152" />
              <rect x="360" y="46" rx="2" ry="2" width="152" height="152" />
            </ContentLoader>
          )}
        </WeatherListContainer>
      </section>
      <DestinationDetailsContainer>
        <DestinationDetails
          text={'População'}
          chartData={shared?.populationData?.data}
        />
        <DestinationDetails
          text={'Pib'}
          chartData={shared?.pibPerCapitalData?.data}
        />
      </DestinationDetailsContainer>
      <CurrencyCard />
    </Container>
  );
}
