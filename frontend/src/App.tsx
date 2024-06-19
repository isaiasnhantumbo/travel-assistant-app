import '@reach/combobox/styles.css';

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import { CurrencyCard } from './components/CurrencyCard';
import { DestinationDetails } from './components/DestinationDetails';
import { Header } from './components/Header';
import { WeatherDailyCard } from './components/WeatherDailyCard';
import GlobalStyles from './styles/global';

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBOi0A937RUgmOAnZTcfCXwgz_1FssGmL0',
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

export default App;
function Map() {
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState(null);
  const weathers = [
    {
      dt: 1718712000,
      sunrise: 1718687492,
      sunset: 1718741040,
      moonrise: 1718729520,
      moonset: 1718677140,
      moon_phase: 0.38,
      temp: {
        day: 293.65,
        min: 289.65,
        max: 293.81,
        night: 290.48,
        eve: 291.31,
        morn: 289.68,
      },
      feels_like: {
        day: 293.27,
        night: 290.33,
        eve: 291.04,
        morn: 289.76,
      },
      pressure: 1014,
      humidity: 58,
      dew_point: 285.05,
      wind_speed: 6.56,
      wind_deg: 238,
      wind_gust: 8.41,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 7,
      pop: 1,
      rain: 1.87,
      uvi: 7.25,
    },
    {
      dt: 1718798400,
      sunrise: 1718773901,
      sunset: 1718827456,
      moonrise: 1718819880,
      moonset: 1718765280,
      moon_phase: 0.41,
      temp: {
        day: 293.96,
        min: 288.22,
        max: 294.32,
        night: 289.78,
        eve: 293.91,
        morn: 288.57,
      },
      feels_like: {
        day: 293.61,
        night: 289.69,
        eve: 293.61,
        morn: 288.49,
      },
      pressure: 1014,
      humidity: 58,
      dew_point: 285.24,
      wind_speed: 6.58,
      wind_deg: 341,
      wind_gust: 10.98,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 15,
      pop: 1,
      rain: 9.26,
      uvi: 7.1,
    },
    {
      dt: 1718884800,
      sunrise: 1718860311,
      sunset: 1718913871,
      moonrise: 1718910300,
      moonset: 1718853840,
      moon_phase: 0.45,
      temp: {
        day: 294.54,
        min: 289.33,
        max: 294.95,
        night: 289.79,
        eve: 292.81,
        morn: 289.96,
      },
      feels_like: {
        day: 294.22,
        night: 289.52,
        eve: 292.5,
        morn: 289.79,
      },
      pressure: 1019,
      humidity: 57,
      dew_point: 285.69,
      wind_speed: 7.06,
      wind_deg: 323,
      wind_gust: 11.05,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: 79,
      pop: 0.63,
      uvi: 6.16,
    },
  ];

  return (
    <>
      <GlobalStyles />
      <Header />
      <CurrencyCard />
      <div className="list">
        <DestinationDetails text={'População'} value={20000} />
        <DestinationDetails text={'Pib Por capital'} value={23.3} />
      </div>
      {weathers.map((current) => (
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

      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    console.log({ address });

    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    console.log({ results });

    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Escolha o seu destino"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
