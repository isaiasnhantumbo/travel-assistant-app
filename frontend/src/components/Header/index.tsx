import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import { useLoadScript } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import { useSharedData } from '../../hooks/useSharedData';
import { Container } from './styles';

export function Header() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:  import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });
  const { onSelectCity, selectedCity } = useSharedData();

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Container>
      <h1>Travel Assistant</h1>
      <Link to="/sign-in">
        <button>Login</button>
      </Link>

      <div className="places-container">
        <PlacesAutocomplete setSelected={onSelectCity} />
      </div>
    </Container>
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
    setSelected({ lat, lng, address, results });
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
